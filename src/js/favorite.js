export function favoriteInit() {
  $(document).on('click', '.favorite', function (e) {
    // e.preventDefault();
    $(this).toggleClass('active-favorite');
  });
}