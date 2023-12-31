const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { USER, PASS, DB } = require("./config/db.config");
const { login } = require("./login"); // Import your login function
<<<<<<< HEAD
const { itemmanagement, getAllItems } = require("./item"); // Import your login function
=======
<<<<<<< HEAD
const { items } = require("./item");
=======
const { itemmanagement } = require("./item"); // Import your login function
>>>>>>> a9423fb6c951a5612bad59cec2828db87d084d14
>>>>>>> ddbabe256735abe85721f1c037302f517ac9d4a0
const app = express();
const dotenv = require('dotenv');

dotenv.config();

class Dbconfig{
    accesDb(){
        db();
    }
}

const port = 8080;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const db = async () => {
    try {
        await connect(`mongodb+srv://${USER}:${PASS}@${DB}`);
        console.log("connected to mongodb");
    } catch (err) {
        console.log(err);
    }
};

db();

app.listen(port, () => {
    console.log("server is running on port " + port);
});

// Routes
app.get("/", (req, res) => {
    res.send("inventory backend is running!");
});

// Route for user login
app.get("/login", login); // Assuming the login functionality is implemented in the 'login' function

// Other routes and middleware can be defined similarly
<<<<<<< HEAD
app.post("/item", items);
=======
app.post("/safeitem", itemmanagement);
<<<<<<< HEAD
app.get("/getAllItems", getAllItems);
=======
>>>>>>> a9423fb6c951a5612bad59cec2828db87d084d14
>>>>>>> ddbabe256735abe85721f1c037302f517ac9d4a0
