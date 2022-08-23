(function (videoPlayer) {
  videoPlayer[0].addEventListener('error', function (event) {
    closeSong();
  });

  videoPlayer[0].addEventListener('ended', function (event) {
    closeSong();
  });

  videoPlayer.keyup(function (e) {
    if (e.key === "Escape") {
      closeSong();
    }
  });


  videoPlayer[0].addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
      closeSong();
    }
  });
})($('#videoPlayer'));