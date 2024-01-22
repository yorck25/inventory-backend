const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const { login, createAccount } = require("./login");
const { items, getAllItems, updateSingleItem, deleteSingleItem } = require("./item");
const app = express();
const dotenv = require('dotenv');

// Load environment-specific variables
if (process.env.NODE_ENV === 'prod') {
  dotenv.config({ path: '.env.prod' });
} else if (process.env.NODE_ENV === 'dev') {
  dotenv.config({ path: '.env.dev' });
}
11 ^
  class Dbconfig {
    accessDb() {
      db();
    }
  }

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
const router = express.Router();

// Connect to MongoDB
const db = async () => {
  try {
    await connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CONNECTION}`);
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
};

db();

router.get("/", (req, res) => {
  res.send("inventory backend is running!");
});

router.get("/login", login);
router.post("/registration", createAccount);

router.post("/item", items);
router.put("/update-single-item", updateSingleItem);
router.get("/get-all-items", getAllItems);
router.delete("/delete-single-item", deleteSingleItem);

app.use('/dev-inventory', router);

app.listen(port, () => {
  console.log("server is running on port " + port);
});