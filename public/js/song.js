var getSong = function (id, cb) {
  $.ajax({
    url: '/song/' + id,
    dataType: 'application/json',
    complete: function (data) {
      if (data.responseText) {
        var jsSong = JSON.parse(data.responseText);
        if (jsSong["id"]) {
          cb(jsSong);
        }
      }
    }
  });
};

var videoPlayer = $('#videoPlayer');

var showSong = function (song) {
  videoPlayer.attr('src', `/song/${song.id}/video`);
  videoPlayer[0].load();
  videoPlayer[0].requestFullscreen();
  videoPlayer[0].play();
  videoPlayer.visible();
  videoPlayer.css('pointer-events', 'none');
};

var closeSong = function () {
  videoPlayer.invisible();
  videoPlayer[0].pause();
  videoPlayer[0].webkitExitFullscreen();
};
