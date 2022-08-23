// $('#mdlInfo')[0].addEventListener('hide.bs.modal', (event) => closeSong());
$('html').keyup(function (e) {
  if (e.key === "Escape") {
    closeSong();
  }
});
