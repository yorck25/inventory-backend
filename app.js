const express = require("express");
const cors = require("cors");
const {connect} = require("mongoose");
const {USER, PASS, DB} = require("./config/db.config");
const app = express();

const port = 8080;

app.use(cors());
app.use(express.json());

const db = require('./models');
const Role = db.role;

const dba = async () => {
    try {
        await connect(`mongodb+srv://${USER}:${PASS}@${DB}`);
        console.log("connected to mongodb");
        initial();
    }
    catch (err) {
        console.log(err);
    }
}

dba();

app.listen(port, () => {
    console.log("server is running on port " + port);
});

app.get("/", (req, res) => {
    res.send("inventory backend is running!");
});

app.get("/", (req, res) => { 
    Items.find()
    .then(items => res.json(items))
    .catch(err => res.json(err))
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}
