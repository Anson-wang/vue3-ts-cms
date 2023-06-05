import { createApp } from 'vue'
import { globalRegister } from './global'

import App from './App.vue'

import router from './router'
import store from './store'
import hyRequest from './service'

const app = createApp(App)

app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')

hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
