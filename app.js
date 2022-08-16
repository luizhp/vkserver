var app = require('./config/express')();
var http = require('http').Server(app);

var porta = process.env.PORT || 8000;
var server = http.listen(porta, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);

});

process
  .on('SIGTERM', function () {
    console.log("\nTerminating");
    process.exit(0);
  })
  .on('SIGINT', function () {
    console.log("\nTerminating");
    process.exit(0);
  });

//https://gist.github.com/benjamingr/0237932cee84712951a2
//reason the rejection reason of the promise susprected in having an unhandled rejection
//p the promise suspected in having an unhandled rejection itself.
process.on('unhandledRejection', function (reason, p) {
  console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
  // application specific logging here
});