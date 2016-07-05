function formatForHTMLOutput(string) {
  // It is probably other chars that needs to be replaced too,
  // but for it should this be sufficient for this MVP. :-)
  string = string.replace(/</g, '&lt;');
  string = string.replace(/>/g, '&gt;');
  return string;
}

module.exports = formatForHTMLOutput;
