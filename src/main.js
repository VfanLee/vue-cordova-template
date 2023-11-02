import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

import { Button, Tabbar, TabbarItem, Row, Col, PullRefresh } from 'vant'
import App from './App.vue'

import 'normalize.css'
import 'vant/lib/index.css'
import '@/styles/index.scss'
import '@/styles/theme/index.scss'

const app = createApp(App)

// 全局注册 Vant 组件
const vantComponents = { Button, Tabbar, TabbarItem, Row, Col, PullRefresh }
for (const component in vantComponents) {
  app.component(vantComponents[component].name, vantComponents[component])
}

app.use(createPinia()).use(router)

if (import.meta.env.PROD) {
  console.log('prod mode')
  // Cordova Event：https://cordova.apache.org/docs/en/12.x/cordova/events/events.html
  document.addEventListener(
    'deviceready',
    function () {
      console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
      app.mount('#app')
    },
    false
  )
} else {
  console.log('dev mode')
  app.mount('#app')
}
