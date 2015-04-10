module.exports = function(mongoose, baucis){
	
	var moment = require('moment');

	// Create a mongoose schema
	var UserSchema = new mongoose.Schema({
		username : {type: String, required: true},
		city : {type: String, required: true},
		timedate :{type: String, required: true}
	});
	// Register new models with mongoose
	var user = mongoose.model('user',UserSchema)
	// Create a simple controller.  By default these HTTP methods
	// are activated: HEAD, GET, POST, PUT, DELETE
	baucis.rest({value:'user'});

}

var insertMockData =function(){
	var userGeo;

	userGeo = new user({
		username : 'admin',
		city: 'London',
		timedata : moment('10-04-2015').toDate() 
	});
	user.save();
};
return {
	insertMockData: insertMockData
};

