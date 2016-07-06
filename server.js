"use strict"

const
  express = require('express'),
  app     = express(),
  path    = require('path'),
  env     = process.env.NODE_ENV || 'development';


const forceSsl(req, res, next) {
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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/advertisers/:format?', (req, res) => {
  const format = req.params.format.toLowerCase();
  res.sendFile(path.join(__dirname + '/response.'+format));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
