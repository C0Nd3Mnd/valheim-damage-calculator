import { createApp } from 'vue';
import { setupRouter } from './router/setup';
import { setupStore } from './store/setup';
// import './assets/global.css'

import App from './App.vue';

const app = createApp(App);

setupRouter(app);
setupStore(app);

app.mount('#app');
