var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb/testData');

//schema//
var locationSchema = mongoose.Schema({
        city : String
    });
//Model//
var Locations = mongoose.model('location',locationSchema);

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(callback){
    console.log('Mongodb is connected');
}); 

module.exports.create = function (nc){
    var cityLocation = new Locations({city:nc})
    console.log(cityLocation.city)
    cityLocation.save(function(err,cityLocation){

        if(!err) return ('The object has been added to the db ...');
    }); 
}

module.exports.update = function(nc){	
}   


module.exports.find = function(nc){	
    function findCity(_id){
        console.log(_id);
    }
    var cityLocation = Location({_id:nc});
    cityLocation.find(findCity);
}

module.exports.delete = function(nc){	
}
