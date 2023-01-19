import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/styles/index.scss';

import App from './App.vue';
import i18n from '@/i18n';
import router from './router';

const app = createApp(App);
app.use(createPinia()).use(i18n).use(router).mount('#app');
