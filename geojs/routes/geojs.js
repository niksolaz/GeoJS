var express = require('express');
var router = express.Router();

/* GET GeoJS page */
router.get('/',function(req,res,next){
	res.render('geojs', { name: 'name' , city: 'city'});
});

/* POST GeoJs page */
router.post('/',function(req,res,next){
	var name = req.body.name;
		city = req.body.city;
	res.send('Data Sent');
});
module.exports = router;