const Items = require('./models/items'); // Import your User model


const item = async (req, res) => {

    try {

        const "app.js "

        const item = Items.findOne;
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
        const result = await item.insert(docs);
        // display the results of your operation
    }
    catch (err) {err.message};
}


exports.item = item;