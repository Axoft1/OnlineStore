const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt') // (npm i jsonwebtoken bcrypt) jsonwebtoken это популярная реализация JWT, bcrypt адаптивная криптографическая хеш-функция формирования ключа, используемая для защищенного хранения паролей
const jwt = require('jsonwebtoken') // для генерации токена
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign( // создаем веб токенБ передаем 3 параметра
            {id, email, role}, 
            process.env.SECRET_KEY, // секретный ключ
            {expiresIn: '24h'} // жизнь токена
            )
}

class UserController {
    async reqistration(req, res, next) {
        const{email, password, role} = req.body
        if (!email || ! password) {
            return next(ApiError.badRequest('Не корректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким  email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5) //https://attacomsian.com/blog/nodejs-password-hashing-with-bcrypt
        const user = await User.create({email, role, password: hashPassword}) //создание пользователя
        const basket = await Basket.create({userId: user.id}) // карзина для пользователя, передаем id
        
        const token =  generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body //Когда пользователь вводит свой адрес электронной почты и пароль на стороне клиента, объект req.body сохраняет эту информацию и отправляет ее на сервер Express
        const user = await User.findOne({where: {email}})
        if(!user){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password) // для сравнения хэшированных паролей
        if (!comparePassword){
            return next(ApiError.internal('Указан не верный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token}) 
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role) // генерирует новый токен и отправляет на клиен, токун пользователя будет постоянно перезаписываться
        return res.json({token})
        // res.json('Working')
    }
}

module.exports = new UserController()
