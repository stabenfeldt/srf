var httpRequest;

var hljs = require('./modules/highlight.min.js');
var formatForHTMLOutput = require('./modules/formatForHTMLOutput.js');

require('../css/style.css');


document.getElementById("fetchButton").onclick = function() {
  var url    =  document.getElementById('query-url').value.replace(/\s/g, '');
  var format =  document.getElementById('format-selector').value;
  makeRequest(url+"/"+format);
};

function makeRequest(url) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = writeHighlightedOutput;
  httpRequest.open('GET', url);
  httpRequest.send();
}

const env = process.env.NODE_ENV || 'development';

function writeHighlightedOutput() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {

      // Make sure the output is formatted so it can be displayed properly.
      var apiResponse = formatForHTMLOutput(httpRequest.responseText);

      // Update the #output div with the response from the API
      var el = document.querySelector('#output');
      el.innerHTML = apiResponse;

      // Tell HighlihtJS to add syntax higlighting
      hljs.highlightBlock(el);

    } else {
      alert('There was a problem with the request. '+ apiResponse);
    }
  }
}
