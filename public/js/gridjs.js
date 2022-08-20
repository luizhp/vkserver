new gridjs.Grid({
  columns: [
    {
      name: 'id',
      width: "0%",
      hidden: true
    },
    {
      name: 'singer',
      width: "10%",
      formatter: (_, row) => gridjs.html(`${row.cells[1].data}`)
    },
    {
      name: 'song',
      width: "20%",
      formatter: (_, row) => gridjs.html(`<a href="javascript:getSong(${row.cells[0].data}, showSong);">${row.cells[2].data}</a>`)
    },
  ],
  pagination: {
    limit: 8
  },
  width: "auto",
  autoWidth: true,
  height: "auto",
  resizable: true,
  search: true,
  sort: true,
  fixedHeader: true,
  server: {
    url: '/songs',
    then: data => data.map(card => [card.id, card.singer, card.title])
  },
  language: {
    'search': {
      'placeholder': '♫ Search song... ♫'
    },
    'pagination': {
      'previous': '⬅️',
      'next': '➡️',
      'showing': '',
      'results': () => 'songs'
    }
  }
}).render(document.getElementById("wrapper"));