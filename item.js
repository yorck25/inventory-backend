const Items = require('./models/items');

const itemmanagement = async (req, res) => {
    const newItem = {
        item: req.body.item,
        buy: parseInt(req.body.buy),
        sell: parseInt(req.body.sell),
        buyindate: req.body.buyindate,
        selldate: req.body.selldate,
        memo: req.body.memo
    };
    
    try {
        const createdItem = await Items.create(newItem);
        console.log("1 document inserted:", createdItem);
        return res.status(200).json("success");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to insert item" });
    }
};

exports.item = item;