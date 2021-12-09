import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueQrcodeReader from 'vue3-qrcode-reader'

createApp(App).use(VueQrcodeReader).mount('#app')
