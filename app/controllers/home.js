module.exports = function (app) {
  app.get("/", function (req, res) {
    let view = 'html/home/html';
    console.log(view);
    res.render(view, {});
  });
}