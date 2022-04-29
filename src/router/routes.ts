import { RouteRecordRaw } from 'vue-router';

// Page imports
import Home from '../pages/Home.vue';
import Character from '../pages/Character.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/character', component: Character },
];
