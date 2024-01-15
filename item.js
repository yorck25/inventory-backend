const Items = require('./models/items');
const JWTDecoder = require('./api/decodeToken');
const mongoose = require('mongoose');

const items = async (req, res) => {
    const jwtDecoder = new JWTDecoder();

    const token = req.headers.token;

    if (!token || !jwtDecoder.decodeJWT(token) == null) return res.status(400).json({ error: "Token not provided in headers" });

    const userId = jwtDecoder.decodeJWT(token).userId

    try {
        const createdItem = await Items.create({
            item: req.body.item,
            buy: parseInt(req.body.buy),
            sell: parseInt(req.body.sell),
            buyindate: req.body.buyindate,
            selldate: req.body.selldate,
            memo: req.body.memo,
            userId: userId
        });

        console.log("1 document inserted:", createdItem);
        return res.status(200).json("success");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to insert item" });
    }
};

exports.items = items;

const getAllItems = async (req, res) => {
    const jwtDecoder = new JWTDecoder();

    const token = req.headers.token;

    if (!token || !jwtDecoder.decodeJWT(token) == null) return res.status(400).json({ error: "Token not provided in headers" });

    const userId = jwtDecoder.decodeJWT(token).userId

    const items = await Items.find({ userId: userId });

    res.send(items);
}

exports.getAllItems = getAllItems;

const updateSingleItem = async (req, res) => {
    const jwtDecoder = new JWTDecoder();
    const token = req.headers.token;

    if (!token || !jwtDecoder.decodeJWT(token)) {
        return res.status(400).json({ error: "Token not provided in headers" });
    }

    const userId = jwtDecoder.decodeJWT(token).userId;

    try {
        // Use findOneAndUpdate to update the existing document
        const updatedItem = await Items.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(req.body._id) },
            {
                $set: {
                    item: req.body.item,
                    buy: parseInt(req.body.buy),
                    sell: parseInt(req.body.sell),
                    buyindate: req.body.buyindate,
                    selldate: req.body.selldate,
                    memo: req.body.memo,
                    userId: userId
                },
            },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ error: "Document not found for the given _id" });
        }

        console.log("1 document updated:", updatedItem);
        return res.status(200).json("success");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to insert/update item" });
    }
};

exports.updateSingleItem = updateSingleItem;

const deleteSingleItem = async (req, res) => {
    const jwtDecoder = new JWTDecoder();
    const token = req.headers.token;

    if (!token || !jwtDecoder.decodeJWT(token)) {
        return res.status(400).json({ error: "Token not provided in headers" });
    }

    const userId = jwtDecoder.decodeJWT(token).userId;

    try {
        const deletedItem = await Items.deleteOne({
            _id: new mongoose.Types.ObjectId(req.headers._id)
        });

        if (!deletedItem) {
            return res.status(404).json({ error: "Document not found for the given _id" });
        }

        console.log("1 document deleted:", deletedItem);
        return res.status(200).json("success");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete item" });
    }
}

exports.deleteSingleItem = deleteSingleItem;