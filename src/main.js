import Vue from 'vue'
import App from './App.vue'
// 导入VueRouter
import VueRouter from 'vue-router'
// 导入路由器
import router from './router'
// 导入ElementUI组件库
import ElementUI from 'element-ui';
// 导入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用VueRouter插件
Vue.use(VueRouter)
// 应用ElementUI插件
Vue.use(ElementUI);

// 路由跳转回到顶部
router.afterEach(() => {
  document.documentElement.scrollTop = 0
})

new Vue({
  render: h => h(App),
  router: router,

}).$mount('#app')
