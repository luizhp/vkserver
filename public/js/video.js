(function (videoPlayer) {
  videoPlayer[0].addEventListener('error', (event) => closeSong());

  videoPlayer[0].addEventListener('ended', (event) => closeSong());

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