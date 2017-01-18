module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/signin');
  });

  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));

};