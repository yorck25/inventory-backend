const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const routingController = require("../controllers/routingController")
module.exports = function (app) {
    app.use(function (req, res, next) {
        let token = req.header['x-access-token']
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/inventory', [authJwt.verifyToken], routingController.router_inventory);
};