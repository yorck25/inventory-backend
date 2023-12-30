const express = require("express");
const cors = require("cors");
const {connect} = require("mongoose");
const {USER, PASS, DB} = require("./config/db.config");
const app = express();

const port = 8080;

app.use(cors());
app.use(express.json());

const db = async () => {
    try {
        await connect(`mongodb+srv://${USER}:${PASS}@${DB}`);
        console.log("connected to mongodb");
    }
    catch (err) {
        console.log(err);
    }
}

db();

app.listen(port, () => {
    console.log("server is running on port " + port);
});

app.get("/", (req, res) => {
    res.send("inventory backend is running!");
});
