<script setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from "vue-router"
import CommonHeader from '../header/CommonHeader.vue'
import CommonFooter from '../header/CommonFooter.vue'
import { onMounted } from 'vue';

onMounted(async () => {
  await import("../../assets/js/top.js")
});
</script>

<template>
<CommonHeader />

<!-- contents -->
<div class="main-wrap">
  <ul>
    <li>
      <img data-lazy="/src/assets/images/main2.jpg" alt="">
      <div class="slick-content">
        <p class="text1">Shaping the Future Together</p>
        <p class="text2">集客に強い！<br>高品質なホームページ制作！</p>
        <p class="text3">ホームページ制作から運用まで<br>様々なつながりを活かして<br>あらゆるヒト・コト・モノをつなぎ<br>相乗効果で新たな未来を共に創造します。</p>
      </div>
    </li>
    <li>
      <img data-lazy="/src/assets/images/main3.jpg" alt="">
      <div class="slick-content">
        <p class="text1">Shaping the Future Together</p>
        <p class="text2">個人事業主・中小企業の<br>未来を豊かにする。</p>
        <p class="text3">ホームページ制作から運用まで<br>様々なつながりを活かして<br>あらゆるヒト・コト・モノをつなぎ<br>相乗効果で新たな未来を共に創造します。</p>
      </div>
    </li>
  </ul>
  <div class="scroll-view-wrap">
    <div class="scroll-view">
      <a href="#news">SCROLL TO VIEW</a>
    </div>
  </div>
</div>

<div id="news" class="basic-wrap news-wrap">
  <div class="sub-title">
    <p>NEWS</p>
    <h2>お知らせ</h2>
  </div>
  <div class="info-box">
    <dl>
      <dt>2023年06月13日</dt>
      <dd><p>	ポケットウェブのオフィシャルサイトを公開いたしました。<br><a href="https://xxxxxxxx.com">https://xxxxxxxx.com</a></p></dd>
    </dl>
  </div>
</div>

<div id="about" class="about-wrap">
  <div class="basic-wrap about-box">
    <div class="about-left">
      <div class="title-wrap">
        <h2>ポケットウェブについて</h2>
        <p>ABOUT US</p>
      </div>
      <div class="about-text">
        <h3>ビジネス課題を解決するWeb戦略。<br>それぞれの価値をつなぎ、それを成果に。<br>幸せな未来を創造する。</h3>
        <div class="text-box">
          <p>いつの時代も、世界を動かしてきたのは「つながり」です。<br>人と人、企業と企業、その「つながり」の連鎖が社会を前進させてきました。</p>
          <p>私たちは「つながり」が持つ可能性を最大限に活かして、未来につなげることでビジネスを変えていきます。</p>
          <p>「つながり」の力でビジネス課題を解決し、変革をもたらし、誰も考えつかなかったような新たな明るい道を切り開いていきます。</p>
          <p>その中でホームページがリリースされたあとにお客様がどう運営していくのかまでを見据え、ビジネス課題を解決するためのWeb戦略や集客の最適化までをご提案、具現化します。</p>
        </div>
      </div>
    </div>
    <div class="about-right">
      <figure class="fadeRightTrigger"><img src="/src/assets/images/about-image.jpg" alt=""></figure>
    </div>
  </div>
</div>

<div id="company" class="company-wrap">
  <div class="sub-title basic-wrap">
    <p>COMPANY</p>
    <h2>会社概要</h2>
  </div>
  <div class="map-wrap">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104002.5306011495!2d139.51248913153174!3d35.45283657608784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185becbbb66509%3A0x69683f660285400!2z56We5aWI5bed55yM5qiq5rWc5biC!5e0!3m2!1sja!2sjp!4v1686587253628!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="company-info-wrap basic-wrap">
    <div class="company-info-left">
      <table>
        <tbody>
          <tr>
            <th>屋号</th>
            <td>ポケットウェブ</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td class="tel-wrap">
              〒220-0000<br>
              神奈川県横浜市〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇<br>
              TEL <a href="tel:12345678910">123-4567-8910</a>
            </td>
          </tr>
          <tr>
            <th>代表者</th>
            <td>
              石原 寛之 / Hiroyuki Ishihara
            </td>
          </tr>
          <tr>
            <th>資格</th>
            <td>ウェブデザイン技能士（国家資格）</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="company-info-right">
      <table>
        <tbody>
          <tr>
            <th>設立日</th>
            <td>2021年8月1日</td>
          </tr>
          <tr>
            <th>事業内容</th>
            <td>
              Webサイト制作サービス<br>
              Webサイト更新・保守サービス<br>
              WEBコンサルティングサービス
            </td>
          </tr>
          <tr>
            <th>URL</th>
            <td class="url-wrap">
              <p>
                オフィシャルサイト<br>
                <a href="https://xxxxxxxx.com">https://xxxxxxxx.com</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

<section class="bottom-btn-wrap bk-gray">
  <div class="contact-wrap">
    <ul>
      <li>
        <a href="chat/">
          <div>
            <h2>CHAT SUPPORT</h2>
            <p>チャットサポート</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

<CommonFooter />
</template>

<style scoped>
</style>