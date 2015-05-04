var express = require('express');
var router = express.Router();
var LocationModel = require('../models/location');

/* GET GeoJS page */
router.get('/',function(req,res,next){
	res.render('geojs', { 
							city:'city',
							country:'country',
							position:{
								latitude:'position',
								longitude:'position'
							}
						});
});

/* GET _id */
router.get('/city/:name',function(req,res,next){
	var city = req.params.name;
	LocationModel.find(city,function(dataDB){
		res.json(dataDB);
	});
});

router.get('/:version',function(req,res){
	res.send(req.params.version)
});
/* POST GeoJs page */
router.post('/',function(req,res,next){
	LocationModel.create(req.body.city,req.body.country,req.body.position);
	res.send('City of '+ req.body.city +','+req.body.country+','+req.body.position);
});
console.log(LocationModel);

module.exports = router;

