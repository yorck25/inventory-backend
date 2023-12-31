const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    console.log("working_5")
    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsername,
            verifySignUp.checkCode,
        ],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signin);

    app.post("/api/auth/logout", controller.logout)

};