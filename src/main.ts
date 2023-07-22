/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import axios from 'axios'
import { createPinia } from 'pinia'
import 'sweetalert2/dist/sweetalert2.min.css'
import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'

loadFonts()

// Create vue app
const app = createApp(App)

axios.defaults.baseURL = "http://45.130.229.212/api/v1/";
axios.interceptors.request.use(
  (config) => {
      const token = sessionStorage.getItem('_token')
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
  },

  (error) => {
      return Promise.reject(error);
  }
);

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(store)
app.use(VueSweetalert2)

// Mount vue app
app.mount('#app')
