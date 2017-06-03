const MongoClient = require('mongodb').MongoClient,
    format = require('util').format;


MongoClient.connect('mongodb://127.0.0.1:27017/chat', function(err, db) {
    if (err) throw err;
    const collection = db.collection("test_insert");

    collection.deleteMany({}, (err, results) => {
        if (err) throw err;

        collection.insertOne({a: 2}, (err, res) => {

            const cursor = collection.find( {a: 2} );
            cursor.toArray(function(err, results) {
                console.dir(results);
                // Let's close the db
                db.close();
            });
        });
    });
});