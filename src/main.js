
import App from './App.vue'
import router from './router'
import store from '../src/store'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
const tg = window.Telegram.WebApp

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
app.use(store)
app.use(router)
registerPlugins(app)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')