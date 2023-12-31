const Items = require('../models/items');


const router_inventory = (req, res) => {
    Items.find()
        .then(result => {
            console.log(result)
                res.status(200).send({router: result});
            })
}

const login = (req, res) => {
    res.render('login', { title: 'Login', message: "" })
}

const register = (req, res) => {
    res.render('register', { title: 'Registrieren', message: "" })
}

module.exports = {
    router_inventory,
    login,
    register,
}