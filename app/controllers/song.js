const fs = require('fs');
const { database, Model, DataTypes } = require("../infra/connectionFactory");
const Song = require("../models/Song")(database, Model, DataTypes);
database.sync({ force: false }).then(() => console.log('db is ready'));

module.exports = function (app) {
  app.get('/songs', async (req, res) => {
    const songs = await Song.findAll({
      order: [
        ['singer', 'asc'],
        ['title', 'asc']
      ]
    });
    res.send(songs);
  });

  app.get('/song/:id', async (req, res) => {
    const requestedId = req.params.id;
    const song = await Song.findOne({ where: { id: requestedId } });
    if (song) {
      console.log(`song: ${song.id.toString().padStart(5, '0')} - ${song.singer} - ${song.title}`);
    }
    res.send(song);
  });

  app.get("/song/:id/video", function (req, res) {
    const requestedId = req.params.id;
    const videoPath = `${process.cwd()}/videos/${requestedId.padStart(5, '0')}.mp4`
    // Ensure there is a range given for the video
    const range = req.headers.range;
    if (!range) {
      res.status(400).send("Requires Range header");
    }
    else if (!fs.existsSync(videoPath)) {
      res.status(500).send("File not found");
    }
    else {
      // console.log(__dirname);
      const videoSize = fs.statSync(videoPath).size;

      const CHUNK_SIZE = 10 ** 6; // 1MB
      const start = Number(range.replace(/\D/g, ""));
      const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

      // Create headers
      const contentLength = end - start + 1;
      const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
      };

      // HTTP Status 206 for Partial Content
      res.writeHead(206, headers);

      // create video read stream for this particular chunk
      const videoStream = fs.createReadStream(videoPath, { start, end });

      // Stream the video chunk to the client
      videoStream.pipe(res);
    }
  });
};