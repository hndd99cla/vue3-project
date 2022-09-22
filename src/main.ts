/*
 * @Description: 
 * @Author: lzx
 * @Date: 2022-09-22 11:35:40
 */
import { createApp } from 'vue'
import App from './App.vue'
import Varlet from 'lzx-varlet-components/es/basic.esm.js'
import 'lzx-varlet-components/es/style';

import './assets/main.css'

createApp(App).use(Varlet).mount('#app')
