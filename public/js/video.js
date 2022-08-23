(function (videoPlayer) {
  // var videoPlayer = $('#videoPlayer')[0];

  videoPlayer.addEventListener('error', function (event) {
    closeSong();
  });

  // $('#videoPlayer')[0].addEventListener('play', function (event) {
  //   console.log('play');
  //   console.log('duration', $('#videoPlayer')[0].duration);
  // });

  videoPlayer.addEventListener('ended', function (event) {
    //console.log('ended');
    closeSong();
  });

  $('#videoPlayer').keyup(function (e) {
    if (e.key === "Escape") {
      closeSong();
    }
  });


  videoPlayer.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
      closeSong();
    }
  });
})($('#videoPlayer')[0]);