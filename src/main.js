import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import './assets/css/reset.css'
// import '@/assets/css/reset-element.scss'
import ElementUI from 'element-ui';
import i18n from '@/lang/index'
import 'element-ui/lib/theme-chalk/index.css';
import httpRequest from '@/utils/httpRequest'
import Cookies from 'js-cookie'
import VueClipboard from 'vue-clipboard2'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
// import 'swiper/dist/swiper-bundle.css'
import 'swiper/dist/css/swiper.css'



Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.prototype.$http = httpRequest // ajax请求方法
Vue.prototype.$Cookies = Cookies
Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI, { i18n: (key, value) => i18n.t(key, value) });

new Vue({
    el: '#app',
    router,
    i18n,
    store,
    components: { App },
    template: '<App/>'
})
var orignalSetItem = localStorage.setItem;
localStorage.setItem = function(key,newValue){
  // 要监听的key为styleList
  if(key === "lang"){
    var setItemEvent = new Event("setItemEvent");
    setItemEvent.newValue = newValue;
    window.dispatchEvent(setItemEvent);
    orignalSetItem.apply(this,arguments);
  }
}
