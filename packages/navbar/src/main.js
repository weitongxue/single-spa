import './set-public-path'
import Vue from 'vue'
import Router from 'vue-router'
import singleSpaVue from 'single-spa-vue'

import router from './router'
import App from './App.vue'

Vue.use(Router)
Vue.config.productionTip = false
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render (h) {
      return h(App)
    },
    router
  }
})
// export const bootstrap = vueLifecycles.bootstrap
export const bootstrap = [
  () => {
    return new Promise((resolve) => {
      console.log('aaa')
      resolve()
    })
  },
  vueLifecycles.bootstrap
]
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
