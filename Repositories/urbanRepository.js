var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:swengpassword@ds245805.mlab.com:45805/sweng";

getRoutes = function() {
  return MongoClient.connect(url).then(function(db) {
    var collection = db.collection("routes");
    
    return collection.find({}, {_id:false, route_short_name:true })
    .sort( { route_short_name: 1 } )
    .toArray();
  }).then(function(items) {
    console.log(items);
    return items;
  });
}

module.exports = {
  getRoutes
};
