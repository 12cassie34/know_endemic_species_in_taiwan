import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'
import { makeServer } from "./mockServer/server"

makeServer()

createApp(App).mount('#app')
