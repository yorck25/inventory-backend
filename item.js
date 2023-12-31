const Items = require('./models/items');
const JWTDecoder = require('./api/decodeToken');

const items = async (req, res) => {

    const jwtDecoder = new JWTDecoder();

    const token = req.headers.token;

    if (!token || !jwtDecoder.decodeJWT(token) == null) {
        return res.status(400).json({ error: "Token not provided in headers" });
    }

    const userId = jwtDecoder.decodeJWT(token).userId
    
    const newItem = {
        item: req.body.item,
        buy: parseInt(req.body.buy),
        sell: parseInt(req.body.sell),
        buyindate: req.body.buyindate,
        selldate: req.body.selldate,
        memo: req.body.memo,
        userId: userId
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

exports.items = items;

const getAllItems = async (req, res) => {
    const jwtDecoder = new JWTDecoder();
    
    const token = req.headers.token;

    if (!token || !jwtDecoder.decodeJWT(token) == null) {
        return res.status(400).json({ error: "Token not provided in headers" });
    }

    const userId = jwtDecoder.decodeJWT(token).userId

    //db.collection('inventory').find({ status: 'D' });

    const items = await Items.find({userId: userId});
    items.forEach(function(item){
        console.log(item._id);
    });

    res.send(items);
}

exports.getAllItems = getAllItems;