
const App = {
  components: {
    CommonFooter,
    CommonHeader,
    TopPage,
  }
}

Vue.createApp(App)
  // ElementPlusを読み込む
  .use(ElementPlus)
  .mount('#app');
