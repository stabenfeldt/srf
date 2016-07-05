module.exports = {
  'Fetch data using the default JSON format': function (browser) {
    browser
    .url('http://localhost:5000')
      .waitForElementVisible('body', 1000)
      .clearValue('input[type=text]')
      .setValue('input[type=text]', 'http://localhost:5000/advertisers')
      .click('#fetchButton')
      .pause(1000)
      .assert.containsText('#output', 'MockAdvertiser')
      .expect.element('#output').text.to.not.contain('xml');
  },

  'Fetch XML': function (browser) {
    browser
      .click('select[id="format-selector"] option[value="XML"]')
      .click('#fetchButton')
      .pause(1000)
      .assert.containsText('#output', 'MockAdvertiser')
      .assert.containsText('#output', 'xml')
      .end();
  }

};
