var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb/testData');

//schema//
var locationSchema = mongoose.Schema({
        city : String,
        country : String,
        position: {
            latitude: Number,
            longitude: Number
        }
    });
//Model//
var Locations = mongoose.model('Locations',locationSchema);

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(callback){
    console.log('Mongodb is connected');
}); 

module.exports.create = function (newCity,newCountry,newPosX,newPosY){
    var cityLocation = new Locations({
                                        city:newCity,
                                        country:newCountry,
                                        position:{
                                            latitude:newPosX,
                                            longitude:newPosY
                                        }
                                    })
    console.log(cityLocation.city +' '+ cityLocation.country+' '+cityLocation.latitude+' '+cityLocation.longitude)
    cityLocation.save(function(err,cityLocation){

        if(!err) return ('The object has been added to the db ...');
    }); 
}

module.exports.update = function(cityUpdate,callback){
   /* Locations.findOneAndUpdate({city:cityUpdate},{upsert: true},function(err,resultData){
        if(err){
            console.log("Update succesful!"),
            return;
        }
        callback(resultData);
    });	*/
}   


module.exports.find = function(cityName,callback){
    Locations.find({city:cityName},function(err,resultData){
        if(err){
            console.log("Damn! We got an error retrieving your data!");
            return;
        }
        callback(resultData);
    });
}


module.exports.delete = function(nc){	
}
