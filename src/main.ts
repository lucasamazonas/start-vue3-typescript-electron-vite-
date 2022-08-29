import { createApp } from 'vue'
import App from './App.vue'
import vueRouter from './router/index.ts'

import './index.css'

const app = createApp(App)

app.use(vueRouter)

app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })