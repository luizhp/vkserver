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

var showSong = function (song) {
  var videoPlayer = $('#videoPlayer');
  videoPlayer.attr('src', `/song/${song.id}/video`);
  videoPlayer[0].load();
  videoPlayer[0].requestFullscreen();
  videoPlayer[0].play();
  $('#mdlInfo').modal('show');
  videoPlayer.visible();
};

var closeSong = function () {
  var videoPlayer = $('#videoPlayer');
  videoPlayer.invisible();
  $('#mdlInfo').modal('hide');
  videoPlayer[0].pause();
  videoPlayer[0].webkitExitFullscreen();
  setTimeout(() => $('#mdlInfo').modal('hide'), 500);
};
