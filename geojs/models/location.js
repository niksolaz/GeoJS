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

module.exports.methods = function(city){
    var cityLocation = new Locations({city:city})
    console.log(cityLocation.city)

    cityLocation.save(function(err,cityLocation){
        if(err) return console.log('The object has been added to the db ...');
    } 

    cityLocation.find(function(err,cityLocation){
        if(err) return console.log('The object has been finded to the db...');
    }
    cityLocation.update(function(err,cityLocation){
        if(err) return console.log('The object has been updated to the db...');
    }
    cityLocation.delete(function(err,cityLocation){
        if(err) return console.log('The object has been deleted to the db...'); 
    }
}