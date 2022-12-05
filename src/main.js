import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import i18n from '@/i18n';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)

app.use(i18n)

app.use(router)

library.add(faBars, faX)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
