// スクロールをしたら要素を動かすアニメーション

//右から左
function fadeAnimeRight() {
  $(".fadeRightTrigger").each(function () {
    var elemPos = $(this).offset().top + 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeRight");
    }
  });
}

// 画面をスクロールしたら動かす
$(window).scroll(function () {
  fadeAnimeRight();
});

// 画面が読み込まれたらすぐに動かす
$(window).on("load", function () {
  fadeAnimeRight();
});

//下から上
function fadeAnimeUp() {
  $(".fadeUpTrigger").each(function () {
    var elemPos = $(this).offset().top + 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    }
  });
}

// 画面をスクロールしたら動かす
$(window).scroll(function () {
  fadeAnimeUp();
});

// 画面が読み込まれたらすぐに動かす
$(window).on("load", function () {
  fadeAnimeUp();
});

//header 固定
$(function () {
  if (window.matchMedia("(min-width:767px)").matches) {
    // レスポンシブ対応として指定している横幅
    var nav = $("header");
    var offset = nav.offset();
    $(window).scroll(function () {
      var scroll_top = $(window).scrollTop();
      if (scroll_top > 95 - 70) {
        // 最初のヘッダーの高さ - 小さくしたときのヘッダーの高さ
        nav.addClass("fixed");
        $("body").css("padding-top", "95px"); // 最初のヘッダー＋ナビボタンの高さ
      } else {
        nav.removeClass("fixed");
        $("body").css("padding-top", "0");
      }
    });
  }
});

$(function () {
  if (window.matchMedia("(min-width:0px)").matches) {
    // レスポンシブ対応として指定している横幅
    var nav = $("header");
    var offset = nav.offset();
    $(window).scroll(function () {
      var scroll_top = $(window).scrollTop();
      if (scroll_top > 65 - 65) {
        // 最初のヘッダーの高さ - 小さくしたときのヘッダーの高さ
        nav.addClass("fixed");
        $("body").css("padding-top", "65px"); // 最初のヘッダー＋ナビボタンの高さ
      } else {
        nav.removeClass("fixed");
        $("body").css("padding-top", "0");
      }
    });
  }
});
