import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './assets/i18n/i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { PostData, GetData } from './api/api'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.PostData = PostData
Vue.prototype.GetData = GetData

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
