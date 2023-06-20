
const CommonHeader = Vue.defineComponent({
  setup () {
    const spMenuBtnClick = (evt) => {
      evt.preventDefault()
      // drawer-toggleクラスを持つ要素が複数存在し、
      // メニューの開閉をする関数がボタン以外にセットされている場合があるので、
      // jQueryのclick関数で全てのdrawer-toggleクラス要素に対してクリックイベントを発生させる。
      $('.drawer-toggle').click()
    };

    return {
      spMenuBtnClick
    }
  },

  template: `
    <!-- header -->
    <header class="header">
      <h1 class="logo"><a href="/">ポケットウェブ</a></h1>
      <nav class="global-navi">
        <ul>
          <li><a href="#news">NEWS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#company">COMPANY</a></li>
          <li><a href="/chat/">CHAT SUPPORT</a></li>
        </ul>
      </nav>

      <!-- sp menu start -->
      <button type="button" @click="spMenuBtnClick" class="drawer-toggle drawer-hamburger">
        <span class="sr-only">menu</span>
        <span class="drawer-hamburger-icon"></span>
      </button>

      <nav class="drawer-nav">
        <ul class="drawer-menu">
          <li><a href="/">TOP</a></li>
          <li><a href="#news">NEWS</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#company">COMPANY</a></li>
          <li><a href="/chat/">CHAT SUPPORT</a></li>
        </ul>
      </nav>
      <!-- sp menu end -->
    </header>
    `
});
