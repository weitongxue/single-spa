import './set-public-path'
import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'

import App from './App.vue'

Vue.config.productionTip = false
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render (h) {
      return h(App)
    }
  }
})
console.log('0000')
export const bootstrap = [
  () => {
    console.log('111')
  },
  vueLifecycles.bootstrap
]
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
