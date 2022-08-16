const { database, Model, DataTypes } = require("./app/infra/connectionFactory");
const Song = require("./app/models/Song")(database, Model, DataTypes);
database.sync({ force: false }).then(() => console.log('db is ready'));

// module.exports = function (app) {
//   app.get('/songs/upload', async (req, res) => {
const SongsDb = require('./db_songs.js');
SongsDb.forEach(async (s) => {
  console.log(s.id);
  await Song.create(s);
});
res.send('songs uploaded');
//   });
// };