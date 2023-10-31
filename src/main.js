import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// cordova event：https://cordova.apache.org/docs/en/12.x/cordova/events/events.html
document.addEventListener(
  'deviceready',
  function () {
    app.mount('#app')
  },
  false
)
