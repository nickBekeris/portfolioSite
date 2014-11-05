var Contact = require('./models/contact');

module.exports = function (app) {

  app.get('/api/contact', function (req, res) {

    // use mongoose to get all todos in the database
    Contact.find(function (err, users) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(users); // return all todos in JSON format
    });
  });

  app.post('/api/contact/:email/:name/:question', function (req, res) {

    Contact.create({

      email: req.params.email,
      name: req.params.name,
      question: req.params.question

    }, function (err, users) {
      if (err) {
        res.send(err);
      }

      res.json(users);
    });
  });

  app.get('*', function (req, res) {
    res.sendfile('./public/index.html');
  });

};
