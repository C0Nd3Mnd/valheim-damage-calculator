import { createApp } from 'vue';
import { setupRouter } from './router/setup';
import { setupStore } from './store/setup';
import { createPinia } from 'pinia';
import './assets/global.css';
import '@mdi/font/css/materialdesignicons.min.css';

import App from './App.vue';
import { setupVuetify } from './plugins/vuetify';

const app = createApp(App);

setupRouter(app);
setupStore(app);
setupVuetify(app);
app.use(createPinia);

app.mount('#app');
