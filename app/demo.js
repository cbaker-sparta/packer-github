var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/testdb", function (err, db) {

    dbo.collection('test', function (err, collection) {

         collection.find().toArray(function(err, items) {
            if(err) throw err;
            console.log(test.id);
        });

    });

});
