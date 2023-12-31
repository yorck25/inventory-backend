const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (user) {
            res.status(404).send({message: "Benutzer bereits registriert" })
            return;
        }

        User.findOne({
            mail: req.body.mail
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (user) {
                res.status(404).send({message: "E-Mail bereits registriert" })
                return;
            }


            next();
        });
    });
};

checkRoleExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(404).send({message: `Fehler! Nutzerrolle ${req.body.roles[i]} existiert nicht!` })
                return;
            }
        }
    }
}

checkCode = (req, res, next) => {
    if (req.body.code === "1234") {
        next();
    } else {
        res.status(404).send({message: 'Falscher authentifizierung code' })
    }
}

const verifySignUp = {
    checkDuplicateUsername,
    checkRoleExisted,
    checkCode,
};
module.exports = verifySignUp;