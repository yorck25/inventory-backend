const mongoose = require('mongoose');
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
});

const Items = mongoose.model('items', inventorySchema);
module.exports = Items;