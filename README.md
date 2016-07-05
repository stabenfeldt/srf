Live demo at https://srf.herokuapp.com.

It's hosted at a free Heroku account. It might need some time to start if no one has used it for a while.

# TODO

* The XML returned has `<<Content-Type: application/json >>` headers. Should be xml.(update respons file)
* Compress the JS. See details at
  [Google Pagespeed](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fsrf.herokuapp.com%2F)
* Write as ES6
* Include HTTP headers in response (update respons file)
* Setup different environments for the test, production and development.
  They should run on differnet ports and use different databases.
* Test on more devices. Only tested on 1 real mobile: Sony Xeria. The rest is tested using the Chrome Devtool.
* Provide support for more than GET requests.
* Setup Cirleci for deployment.


# Start
Get the app running by `npm start`

# Tests

## Integration tests

*Install Selenium*

Guide for OS X:
`brew info selenium-server-standalone`

`npm test:integration`
That will run the tests specified in the `integration-tests` folder.

## Unit tests
`npm test`
