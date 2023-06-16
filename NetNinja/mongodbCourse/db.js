const { MongoClient } = require('mongodb')

let dbConnection;
module.exports = {
    connectToDb : (cb) => {
        MongoClient.connect('mongodb://localhost:27017/bookstore')
            .then((client) => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                return cb(err);
            })
    },
    getDb : () => dbConnection
}