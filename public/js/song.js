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
  var video = $('#videoPlayer');
  video.attr('src', `/song/${song.id}/video`);
  video[0].load();
  $('#mdlInfo').modal('show');
  video[0].requestFullscreen();
  video[0].play();
};

var closeSong = function () {
  $('#videoPlayer')[0].webkitExitFullscreen();
  $('#videoPlayer')[0].pause();
  $('#mdlInfo').modal('hide');
  // setTimeout(function () {
  //   $('#mdlInfo').modal('hide');
  // }, 500);
};
