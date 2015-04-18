var express = require('express');
var router = express.Router();

/* GET GeoJS page */
router.get('/',function(req,res,next){
	res.render('geojs', { name: 'username' , city: 'city'});
});

module.exports = router;