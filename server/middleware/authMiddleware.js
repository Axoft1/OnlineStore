/** 
 * @param {number} token  Токен обычно помещают в headers.authorization
 * @param {number} decoder  проверяет токен на валидность
*/

const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] //Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
        if (!token){
            return res.status(401).json({message: 'Не авторизован'})
        }
        const decoder = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: 'Пользователь не авторизован!'})
    }
}