const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    group: {
        type: String,
        required: true
    },
    array: {
        type: Array,
        required: true
    }, 
        Object: {
            type: Object,
            required: true
        },
            ObjectId: {
                type: ObjectId,
                required: true
            },
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

const ItemsGroup = mongoose.model('items', inventorySchema);
module.exports = ItemsGroup;