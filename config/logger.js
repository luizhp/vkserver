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

  morgan.token('localtimestamp', (req) => new Date().toISOString());

  app.use(morgan("[:localtimestamp] :method :url :status :res[content-length] - :remote-addr - :response-time ms"))

  return app;
}
