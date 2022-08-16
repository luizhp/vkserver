var songnumber = Array.apply(null, Array(5)).map(function () { });

var getSongNumber = (function () {
  return songnumber.reduce((acc, el) => acc += el || '');
});

var getSong = function (id, cb) {
  $.ajax({
    url: '/song/' + id,
    dataType: 'application/json',
    complete: function (data) {
      if (data.responseText) {
        cb(JSON.parse(data.responseText));
      }
    }
  });
};

var showSong = function (song) {
  $('#videoPlayer').attr('src', `/song/${song.id}/video`);
  $("#songsinger").text(song.singer);
  $("#songtitle").text(song.title);
  $('#mdlInfo').modal('show');
  $('#videoPlayer')[0].requestFullscreen();
  $('#videoPlayer')[0].play();
};

var closeSong = function () {
  $('#videoPlayer')[0].pause();
  // $('#videoPlayer').attr('src', 'javascript:;');
  $('#videoPlayer')[0].webkitExitFullscreen()
  $("#songsinger").text('');
  $("#songtitle").text('');
  setTimeout(function () {
    $('#mdlInfo').modal('hide');
    pincodeClear();
    pincodeFocus();
  }, 500);
};
