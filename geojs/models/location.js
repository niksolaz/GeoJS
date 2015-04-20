var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');

//schema//
var locationSchema = mongoose.Schema({
        city : String
    })
//Model//
var Locations = mongoose.model('location',locationSchema)

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(callback){
    console.log('Mongodb is connected');
}); 

module.exports.create = function(city){
    var cityLocation = new Locations({city:city})
    console.log(cityLocation.city)    
}