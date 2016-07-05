var should = require('should');

describe('Format XML for output on HTML pages', function() {
  var formatForHTMLOutput = require('../client/js/modules/formatForHTMLOutput.js');
    it('removes all lt and gt chars', function() {
      var rawXML= '<xml> </xml>';
      formatForHTMLOutput(rawXML).should.not.match('<');
      formatForHTMLOutput(rawXML).should.not.match('>');
    });
});
