var express = require('express');

var app = express(), startPort;

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.compress());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(app.get('port'), function () {
  console.log('Server started on port %s', app.get('port'));
});