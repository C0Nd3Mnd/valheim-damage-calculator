import { RouteRecordRaw } from 'vue-router';

// Page imports
import Creatures from '@/pages/Creatures.vue';
import CreatureDetail from '@/pages/CreatureDetail.vue';
import Equipment from '@/pages/Equipment.vue';
import About from '@/pages/About.vue';
import Food from '@/pages/Food.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/creatures' },
  { path: '/creatures', component: Creatures, meta: { title: 'Creatures' } },
  {
    path: '/creatures/:name',
    component: CreatureDetail,
    meta: { title: 'Creature Detail' },
  },
  { path: '/equipment', component: Equipment, meta: { title: 'Equipment' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/food', component: Food, meta: { title: 'Food' } },
];
