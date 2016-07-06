"use strict";

var httpRequest;

const
  hljs                = require('./modules/highlight.min.js'),
  formatForHTMLOutput = require('./modules/formatForHTMLOutput.js'),
  env                 = process.env.NODE_ENV || 'development';

require('../css/style.css');


document.getElementById("fetchButton").onclick = () => {
  const
    url    = document.getElementById('query-url').value.replace(/\s/g, ''),
    format = document.getElementById('format-selector').value;
  makeRequest(url+"/"+format);
};

const makeRequest = (url) => {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = writeHighlightedOutput;
  httpRequest.open('GET', url);
  httpRequest.send();
}


const writeHighlightedOutput = () => {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {

      // Make sure the output is formatted so it can be displayed properly.
      const apiResponse = formatForHTMLOutput(httpRequest.responseText);

      // Update the #output div with the response from the API
      const el = document.querySelector('#output');
      el.innerHTML = apiResponse;

      // Tell HighlihtJS to add syntax higlighting
      hljs.highlightBlock(el);

    } else {
      alert('There was a problem with the request. '+ apiResponse);
    }
  }
}
