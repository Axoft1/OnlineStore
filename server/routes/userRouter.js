const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.reqistration)
router.post('/login', userController.login)
router.get('/auth',authMiddleware, userController.check) //проверка пользователя на авторизованность
// router.get('/auth',(req, res) => {
//     res.json({massage: 'ALL WORKING!!!'})
// })

module.exports = router