const Items = require('./models/items'); // Import your User model


const itemmanagement = async (req, res) => {

    try {
        const coll = db.collection("items");
        // insert code goes here
        const docs = [
            { 
                item: req.body.item, 
                buy: req.body.buy, 
                sell: req.body.sell, 
                buyindate: req.body.buyindate, 
                selldate: req.body.selldate,
                memo: req.body.memo
            }
        ];
        const result = await coll.insertMany(docs);
        // display the results of your operation
    }
    catch (err) {err.message = err.message};
}


exports.itemmanagement = itemmanagement;