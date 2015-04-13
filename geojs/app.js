var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    baucis = require('baucis'),
    geojsManager = require('./lib/geojs_manager')(mongoose,baucis),
    path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();



// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port',process.env.PORT || 3000);
app.use('/api',baucis());
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

mongoose.connect('mongodb://127.0.0.1:27017/mongoose-rest');

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error: '));
db.once('open',function(){
  http.createServer(app).listen(app.get('port'),'127.0.0.1', function(){
    console.log('GeoJs server listening on port'+app.get('port'));
  });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
