import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import language from './language'

const app = createApp(App)

const i18n = createI18n(language)

app.use(i18n)

app.use(router)

app.mount('#app')
