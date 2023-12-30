const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    size: {
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
    platform: {
        type: String,
        required: true,
    },
    buyindate: {
        type: Date,
        required: false,
    },
    selldate: {
        type: Date,
        required: false,
    },
    memo: {
        type: String,
        required: false,
    },
});

const Items = mongoose.model('items', inventorySchema);
module.exports = Items;