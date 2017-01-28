module.exports = {
  init: function () {
    console.log('foo');

    $( document ).ready(function() {
      $('.js-dropdown').click(function() {
        $('.content-dropdown').toggleClass('is-open');
      });

      $('table').tableHover({colClass: 'hover'});

    })

  }
};
