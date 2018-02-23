module.exports = {

    getUsers: (req, res) => {
        const db = req.app.set('db')
        db.getUsers()
        .then((users) => res.status(200).send(users))
        .catch( () => res.status(500).send())
    },

    newUser: (req, res) => {
        const db = req.app.set('db')
        db.newUser(req.body.username, req.body.password)
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send())
    },

    loginSession: (req, res, next) => {
        if(req.body.username) {
            req.session.user.username = req.body.username
            req.session.user.password = req.body.password
            // req.session.user.properties = res.data.properties
            res.status(200).send(req.session.user)
        } else {
            res.status(500).send('Unauthorized')
        }
    }
}