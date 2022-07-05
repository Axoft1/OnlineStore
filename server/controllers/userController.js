class UserController {
    async reqistration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res) {
        const {id} = req.query
        res.json(id)
        // res.json('Working')
    }
}

module.exports = new UserController()
