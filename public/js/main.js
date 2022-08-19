// pincodeCreate();
// pincodeFocus();

// $('body').click(function () {
//   pincodeFocus();
// });

new gridjs.Grid({
  columns: [
    {
      name: '#',
      formatter: (_, row) => gridjs.html(`<center><a href="javascript:getSong(${row.cells[0].data}, showSong);">${row.cells[0].data}</a></center>`)
      //formatter: (cell) => `<center>${cell}</center>`
    },
    "singer",
    "title"
  ],
  pagination: {
    limit: 8
  },
  search: true,
  sort: true,
  fixedHeader: true,
  server: {
    url: '/songs',
    then: data => data.map(card => [card.id, card.singer, card.title])
  }
}).render(document.getElementById("wrapper"));