import { RouteRecordRaw } from 'vue-router';

// Page imports
import Home from '../pages/Home.vue';
import Equipment from '../pages/Equipment.vue';
import About from '../pages/About.vue';
import Food from '../pages/Food.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, meta: { title: 'Creatures' } },
  { path: '/equipment', component: Equipment, meta: { title: 'Equipment' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/food', component: Food, meta: { title: 'Food' } },
];
