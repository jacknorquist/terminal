$('form').on('submit', function addMovies(evt) {
  evt.preventDefault();
  let $title = $('.title').val();
  let $rating = $('.rating').val();
  let $movieDiv = $('<div>');
  let $h1Text = $('<h1>', { text: `${$title} ${$rating}` });
  let $removeBtn = $('<button>');

  $movieDiv.append($h1Text);
  $movieDiv.append($removeBtn);

  $('body').append($movieDiv);
});
