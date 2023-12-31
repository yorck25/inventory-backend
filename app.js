const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser')
require('dotenv').config();
const cors = require('cors')
var corsOptions = {
    origin: "http://localhost:8081"
};

var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

const app = express();

app.use(connectLiveReload());

app.set('view engine', 'ejs');

app.use(cookieParser())

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

const db = require('./models');
const Role = db.role;
const dbConfig = require('./config/db.config');
db.mongoose
    .connect(`mongodb+srv://${dbConfig.USER}:${dbConfig.PASS}@${dbConfig.DB}`, {

<<<<<<< HEAD
    })
    .then(() => {
        console.log("Connected");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

=======
const dba = async () => {
    try {
        await db.mongoose.connect(`mongodb+srv://${USER}:${PASS}@${DB}`);
        initial();
        console.log("connected to mongodb");
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

app.get("/items", (req, res) => { 
    Items.find()
    .then(items => res.json(items))
    .catch(err => res.json(err))
});

function initial() {
    try{
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
    }catch(err){
        console.log(err);
    }
}
>>>>>>> 332ef1584c0a4ee25806f159f1ba438c0688a661
