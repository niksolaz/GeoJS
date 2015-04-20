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

module.exports.create = function(name_city){
    var cityLocation = new Locations({city:name_city})
    console.log(cityLocation.city)

    cityLocation.save(function(err,cityLocation){
        if(err) return console.log('The object has been added to the db ...');
    }); 
}

module.exports.update = function(name_city){

}

module.exports.find = function(name_city){

}

module.exports.delete = function(name_city){

}