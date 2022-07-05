const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const UserController = require('../controllers/userController')

router.post('/registration', userController.reqistration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
// router.get('/auth',(req, res) => {
//     res.json({massage: 'ALL WORKING!!!'})
// })

module.exports = router