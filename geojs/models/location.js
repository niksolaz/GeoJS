var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(callback){
    //Schema//
    var locationSchema = mongoose.Schema({
        city : String
    })
    //Model//
    var locations = mongoose.model('torino',locationSchema)

    var cityLocation = new locations({city:'milano'})
    console.log(cityLocation.city)


});