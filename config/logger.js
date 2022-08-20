// add timestamps in front of log messages
require('console-stamp')(console, 'yyyy-mm-dd HH:MM:ss.l-03:00');
var morgan = require('morgan');

// require('console-stamp')(console, {  format: ':date(yyyy/mm/dd HH:MM:ss.l)' });

//var localtimestamp = () => new Date().toISOString();
var toIsoString = function (date) {
  var tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? '+' : '-',
    pad = function (num) {
      return (num < 10 ? '0' : '') + num;
    };

  return date.getFullYear() +
    '-' + pad(date.getMonth() + 1) +
    '-' + pad(date.getDate()) +
    ' ' + pad(date.getHours()) +
    ':' + pad(date.getMinutes()) +
    ':' + pad(date.getSeconds()) +
    '.' + pad(date.getMilliseconds()) +
    dif + pad(Math.floor(Math.abs(tzo) / 60)) +
    ':' + pad(Math.abs(tzo) % 60);
};

module.exports = function (app) {

  morgan.token('localtimestamp', function getId (req) {
    return toIsoString(new Date());
  })

  // app.use(function (req, res, next) {
  //   req.localtimestamp = localtimestamp();
  //   return next();
  // });

  // app.use(morgan('combined'))
  //app.use(morgan("[:date[iso]] [LOG] :method :url :status :res[content-length] - :remote-addr - :response-time ms"))
  app.use(morgan("[:localtimestamp] [LOG]   :method :url :status :res[content-length] - :remote-addr - :response-time ms"))

  return app;
}
