// add timestamps in front of log messages
//require('console-stamp')(console, 'yyyy-mm-dd HH:MM:ss.l-03:00');
//require('console-stamp')(console, "yyyy-mm-dd'T'HH:MM:ss'Z'");
// require('console-stamp')(console, {
//   format: ":date(UTC:yyyy-mm-dd'T'HH:MM:ss'Z', true)"
// });
// require('console-stamp')(console, {
//   format: ":date(UTC:yyyy-mm-dd'ABCDEFGHIJKLMNOPQRSTUVWXYZ'HH:MM:ss'Z', true)"
// });
require('log-timestamp');
var morgan = require('morgan');

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
  app.enable("trust proxy");

  // morgan.token('localtimestamp', function getId (req) {
  //   return toIsoString(new Date().toISOString());
  // })
  morgan.token('localtimestamp', (req) => new Date().toISOString());

  app.use(morgan("[:localtimestamp] :method :url :status :res[content-length] - :remote-addr - :response-time ms"))

  return app;
}
