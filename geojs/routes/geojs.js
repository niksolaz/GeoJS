var express = require('express');
var router = express.Router();

/* GET GeoJS page */
router.get('/',function(req,res,next){
	res.render('geojs', { city: 'city'});
});

/* POST GeoJs page */
router.post('/',function(req,res,next){
	var city = req.body.city;
	res.send('<h1> City </h1>');
});
module.exports = router;