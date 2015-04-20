var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');

//schema//
var locationSchema = mongoose.Schema({
        city : String
    })
//Model//
var Locations = mongoose.model('location',locationSchema)

var cityLocation = new Locations({city:'milano'})
console.log(cityLocation.city)

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(callback){
    console.log('Mongodb is connected');
}); 