const mongoose = require('mongoose');
const User = require('./user.models');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    buy: {
        type: Number,
        required: true,
    },
    sell: {
        type: Number,
        required: true,
    },
    buyindate: {
        type: String,
        required: false,
    },
    selldate: {
        type: String,
        required: false,
    },
    memo: {
        type: String,
        required: false,
    },
    userId: {
        type: String,
        required: true,
    },
});

const Items = mongoose.model('items', inventorySchema);
module.exports = Items;