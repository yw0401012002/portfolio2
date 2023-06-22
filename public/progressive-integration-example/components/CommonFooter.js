
const CommonFooter = Vue.defineComponent({
  template: `
    <!-- footer -->
    <footer>
      <div class="f-left-wrap">
        <div class="f-navi">
          <ul>
            <li><a href="#news">NEWS</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#company">COMPANY</a></li>
            <li><a href="/chat/">CHAT SUPPORT</a></li>
          </ul>
        </div>
        <div class="copy-rights">
          <small><span>Copyright</span>&copy; Pocket Web<span> All Rights Reserved.</span></small>
        </div>
      </div>
      <div class="f-right-wrap">
        <p class="logo"><a href="/">ポケットウェブ</a></p>
        <p class="text">未来を共に創造 ポケットウェブ</p>
      </div>
    </footer>
  `
});
