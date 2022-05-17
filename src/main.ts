import { createApp } from 'vue';
import { setupRouter } from './router/setup';
import { createPinia } from 'pinia';
import './assets/global.css';
import '@mdi/font/css/materialdesignicons.min.css';

import App from './App.vue';
import { setupVuetify } from './plugins/vuetify';
import { setupPinia } from './store/setup';

const app = createApp(App);

setupRouter(app);
setupVuetify(app);
setupPinia(app);

app.mount('#app');
