var Contact = require('./models/contact');

module.exports = function (app) {

  app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
  });

};
