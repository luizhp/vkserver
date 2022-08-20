var getSong = function (id, cb) {
  $.ajax({
    url: '/song/' + id,
    dataType: 'application/json',
    complete: function (data) {
      if (data.responseText) {
        var jsSong = JSON.parse(data.responseText);
        if (jsSong["id"]) {
          cb(JSON.parse(data.responseText));
        }
      }
    }
  });
};

var showSong = function (song) {
  $('#videoPlayer').attr('src', `/song/${song.id}/video`);
  $('#videoPlayer')[0].load();
  $("#songsinger").text(song.singer);
  $("#songtitle").text(song.title);
  $('#mdlInfo').modal('show');
  $('#videoPlayer')[0].requestFullscreen();
  $('#videoPlayer')[0].play();
};

var closeSong = function () {
  $('#videoPlayer')[0].webkitExitFullscreen();
  $('#videoPlayer')[0].pause();
  $("#songsinger").text('');
  $("#songtitle").text('');
  setTimeout(function () {
    $('#mdlInfo').modal('hide');
  }, 500);
};
