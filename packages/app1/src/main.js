import './set-public-path'
import Vue from 'vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

import App from './App.vue'

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router
  }
})

export const bootstrap = [
  () => {
    return new Promise(resolve => {
      console.log('bbb')
      resolve()
    })
  },
  vueLifecycles.bootstrap
]
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
