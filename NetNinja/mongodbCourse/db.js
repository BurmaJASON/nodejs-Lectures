const { MongoClient } = require('mongodb')

let dbConnection;
let uri = 'mongodb+srv://admin:admin123456@cluster0.63qhgpt.mongodb.net/?retryWrites=true&w=majority';

module.exports = {
    connectToDb : (cb) => {
        MongoClient.connect(uri)
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