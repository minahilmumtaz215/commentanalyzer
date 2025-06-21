import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '../src/assets/main.css'
import CoreuiVue from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(CoreuiVue)

app.mount('#app')
