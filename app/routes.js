var Contact = require('./models/contact'),
  nodemailer = require('nodemailer');

module.exports = function (app) {

  var transporter = nodemailer.createTransport({
    host: 'mail.name.com',
    secureConnection: false,
    port: 25,
    auth: {
      user: 'nick@bekeris.info',
      pass: 'Qw3rty!2'
    }
  });

  app.get('/api/contact', function (req, res) {

    // use mongoose to get all todos in the database
    Contact.find(function (err, contact) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        res.send(err);
      }

      res.json(contact); // return all todos in JSON format
    });
  });

  app.post('/api/contact/:email/:name/:question', function (req, res) {

    Contact.create({

      email: req.params.email,
      name: req.params.name,
      question: req.params.question

    }, function (err, contact) {
      if (err) {
        res.send(err);
      }

      var mailOptions = {
        from: contact.email,
        to: 'nick@bekeris.info',
        subject: 'Hey Nick, I have a question/concern',
        text: contact.question
      };

      var mailOptions2 = {
        from: 'nick@bekeris.info', // sender address
        to: contact.email, // list of receivers
        subject: 'Hello ' + contact.name + '', // Subject line
        text: 'Thank you for contacting me. I will attempt to respond as soon as possible.'
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: ' + info.response);
        }
      });

      transporter.sendMail(mailOptions2, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Message sent: ' + info.response);
        }
      });

      transporter.close();

      res.json(contact);
    });
  });

  app.delete('/api/contact/:id', function (req, res) {

    Contact.remove({

      _id: req.params.id

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
