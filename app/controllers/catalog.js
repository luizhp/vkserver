module.exports = function (app) {
  app.get("/catalog", function (req, res) {
    let view = 'html/catalog/html';
    console.log(view);
    res.render(view, {});
  });
}