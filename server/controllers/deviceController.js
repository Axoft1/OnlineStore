const uuid = require('uuid') //Генерирует случайные ID (npm i uuid)
const path = require('path') //Модуль предоставляет утилиты для работы с путями к файлам и каталогам
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create (req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName)) //две точки для перемещения назад в папку
            const device = await Device.create({name, price, brandId, typeId, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                });
            }
            
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
 
    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        if (!brandId && !typeId){
            devices = await Device.findAndCountAll({limit, offset})//findAndCountAll метод который сочетает findAll в себе и count. Это полезно при работе с запросами, связанными с нумерацией страниц, когда вы хотите получить данные с limitпомощью иoffset, но также необходимо знать общее количество записей, соответствующих запросу.
        }
        if (brandId && !typeId){
            devices = await Device.findAndCountAll({where:{typeId},limit, offset})
        }
        if (!brandId && typeId){
            devices = await Device.findAndCountAll({where:{brandId},limit, offset})
        }
        if (brandId && typeId){
            devices = await Device.findAndCountAll({where:{typeId},limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res){
        const{id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()
