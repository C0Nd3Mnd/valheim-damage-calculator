import { createApp } from 'vue';
import { setupRouter } from './router/setup';
import { setupStore } from './store/setup';
// import './assets/global.css'
import '@mdi/font/css/materialdesignicons.min.css';

import App from './App.vue';

const app = createApp(App);

setupRouter(app);
setupStore(app);

app.mount('#app');
