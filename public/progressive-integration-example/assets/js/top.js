//slick - メイン画像

$(function () {
  $(".main-wrap ul").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    swipe: true,
    lazyLoad: "ondemand",
  });
});

//ページ内リンクのスムーススクロール

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    if ($(window).width() > 767) {
      var headerHeight = 95;
    } else {
      var headerHeight = 56;
    }
    var position = target.offset().top - headerHeight - 5;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
