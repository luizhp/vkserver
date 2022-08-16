$('#mdlInfo')[0].addEventListener('hide.bs.modal', function (event) {
  closeSong();
});
$('html').keyup(function (e) {
  if (e.key === "Escape") {
    closeSong();
  }
});