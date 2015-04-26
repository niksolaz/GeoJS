var express = require('express');
var router = express.Router();
var LocationModel = require('../models/location');

/* GET GeoJS page */
router.get('/',function(req,res,next){
	res.render('geojs', { city:'city'});
});

/* GET _id */
router.get('/_id',function(res,req,next){
	res.send('_id');
});

/* POST GeoJs page */
router.post('/',function(req,res,next){
	LocationModel.create(req.body.city);
	res.send('City of '+ req.body.city);
});
console.log(LocationModel);

module.exports = router;

