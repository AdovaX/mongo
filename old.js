var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/my_database";

var db2; 


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

MongoClient.connect("mongodb://localhost:27017/my_database",
	{useUnifiedTopology: true, useNewUrlParser: true }, 
    function(err, db) {
    if(!err) {
    console.log("We are connected");
      db2 = db;

    }
});

console.log(db2);

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("admin", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

 
   
  // var myobj = { name: "Company Inc", address: "Highway 37" };
  // db.collection("admin").insertOne(myobj, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  //   db.close();
  // });
 

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("admin").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });