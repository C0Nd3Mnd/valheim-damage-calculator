import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const vuetify = require('@vuetify/vite-plugin');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ reactivityTransform: true }), vuetify({ autoImport: true })],
});
