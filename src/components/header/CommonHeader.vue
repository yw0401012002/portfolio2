<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  $(".drawer").drawer();
  await import("../../assets/js/common.js")
});
</script>

<template>
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

  <!--sp menu start-->
  <button type="button" class="drawer-toggle drawer-hamburger">
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
  <!--sp menu end-->
</header>
</template>

<style scoped>
</style>