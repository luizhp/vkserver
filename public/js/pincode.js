var pincodeCreate = function () {
  $('#chooseid').pincodeInput({

    inputclass: 'keypad',
    containerclass: 'keypadmask',

    // hide digits like password input
    hidedigits: false,

    // 4 input boxes = code of 4 digits long
    inputs: 5,

    placeholders: '🎵 ♩ ♭ 🎶 ♮',

    // keyDown callback
    keydown: function (e) {
      if (e.keyCode === 13) {
        // console.log(e.keyCode);
        getSong(getSongNumber(), showSong);
        pincodeClear();
        pincodeFocus();
      }
    },

    // callback on every input on change (keyup event)
    change: function (input, value, inputnumber) {
      //input = the input textbox DOM element
      //value = the value entered by user (or removed)
      //inputnumber = the position of the input box (in touch mode we only have 1 big input box, so always 1 is returned here)
      // console.log('change', input);
      songnumber[inputnumber - 1] = value || undefined;
      // console.log(songnumber);
    },

    // callback when all inputs are filled in (keyup event)
    complete: function (value, e, errorElement) {
      // value = the entered code
      // e = last keyup event
      // errorElement = error span next to to this, fill with html 
      // e.g. : $(errorElement).html("Code not correct");
    }

  });
}

var pincodeClear = function () {
  $('#chooseid').pincodeInput().data('plugin_pincodeInput').clear();
  songnumber = Array.apply(null, Array(5)).map(function () { });
};

var pincodeFocus = function () {
  $('#chooseid').pincodeInput().data('plugin_pincodeInput').focus();
};
