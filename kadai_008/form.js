$(function () {
  $('.btn').on('click', () => {
    const text = 'クリックしました！'
    $('.text-box').val(text);
  });
});