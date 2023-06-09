import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import locale from "element-ui/lib/locale/lang/en";
import AOS from "aos";
import "aos/dist/aos.css";
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
