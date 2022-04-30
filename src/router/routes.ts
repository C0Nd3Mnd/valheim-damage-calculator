import { RouteRecordRaw } from 'vue-router';

// Page imports
import Home from '../pages/Home.vue';
import Character from '../pages/Character.vue';
import About from '../pages/About.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, meta: { title: 'Creatures' } },
  { path: '/character', component: Character, meta: { title: 'Character' } },
  { path: '/about', component: About, meta: { title: 'About' } },
];
