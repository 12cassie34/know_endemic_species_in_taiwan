import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'

// import { worker } from "./mocks/browser";
const { worker } = require('./mocks/browser')
worker.start()

createApp(App).mount('#app')
