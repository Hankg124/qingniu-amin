import '@/styles/index.scss' 
import { createApp } from 'vue'
import {Global} from '@/global'

import App from './App.vue'
import router from './router'

import pinia from '@/stores/index'

import '@/permisstion/permisstion'

const app = createApp(App)

app.use(Global)
app.use(pinia)

app.use(router)

app.mount('#app')
