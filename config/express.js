var express = require('express');
var load = require('consign');
//var expressValidator = require('express-validator');

module.exports = function () {

  var app = express();

  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //aceitar conteúdos dos posts
  //urlencoded -> formulário html post
  //ou json -> post com json
  //expressValidator https://express-validator.github.io/docs/
  app.use(express.json())
  app.use(express.urlencoded({
    extended: true
  }));
  // app.use(expressValidator());

  app = require('./logger.js')(app);

  load({
    cwd: 'app'
  })
    //    .include('infra')
    //    .include('models')
    .include('controllers')
    //    .include('services')
    //    .include('data')
    .into(app);

  // app.use(function (req, res, next) {
  //     if (process.env.NODE_ENV != 'test') {
  //         //res.status(404).render("error/404");
  //         res.redirect('/errors/404');
  //     }
  //     next();
  // });

  // app.use(function (error, req, res, next) {
  //     if (process.env.NODE_ENV != 'test') {
  //         //res.status(500).render("error/500");
  //         res.redirect('/errors/500');
  //     }
  //     next();
  // });
  //tem que colocar na ordem, caso contrário ele passa pelo middleware e ainda não vai ter acontecido nenhum erro.

  return app;
}