// const System = require('systemjs')
// console.log(System)
console.log('a')
async function bootstrap () {
  // const [singleSpa, Vue, VueRouter, Vuex] = await Promise.all([
  //   System.import('single-spa'),
  //   System.import('vue'),
  //   System.import('vue-router'),
  //   System.import('vuex')
  // ])
  // Vue.config.devtools = process.env.NODE_ENV === 'development'
  // Vue.use(VueRouter)
  // Vue.use(Vuex)

  // // @ts-ignore
  // Vue.prototype.$eventBus = new Vue()
  // // @ts-ignore
  // window.rootStore = new Vuex.Store() // 全局注册唯一的vuex, 供子应用的共享

  // try {
  //   singleSpa.registerApplication({
  //     name: 'navbar',
  //     app: () => System.import('navbar'),
  //     activeWhen: '/navbar',
  //     customProps: {}
  //   })
  //   // 子程序1
  //   singleSpa.registerApplication('app1', () => System.import('app1'), (location) => {
  //     return location.hash.startsWith('#/app1')
  //   })
  //   // 子程序2
  //   singleSpa.registerApplication('app2', () => System.import('app2'), (location) => {
  //     return location.hash.startsWith('#/app2')
  //   })
  //   singleSpa.start()
  // } catch (e) {
  //   throw new Error('应用配置加载失败')
  // }
}

bootstrap().then(r => {
  console.log(r)
  console.log('系统已成功启动:D')
})
