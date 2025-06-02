import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import i18n from './i18n'

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app')