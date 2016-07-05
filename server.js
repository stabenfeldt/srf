"use strict"

const
  express = require('express'),
  app     = express(),
  path    = require('path'),
  env     = process.env.NODE_ENV || 'development';


const forceSsl = function(req, res, next) {
	if (req.headers['x-forwarded-proto'] !== 'https') {
		return res.redirect(['https://', req.get('Host'), req.url].join(''));
	}
	return next();
};

if (env === 'production') {
	app.use(forceSsl);
}
app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/advertisers/:format?', function(req, res) {
  const format = req.params.format.toLowerCase();
  res.sendFile(path.join(__dirname + '/response.'+format));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
