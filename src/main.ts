import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)
app.use(VueFullPage)
app.mount('#app')
