<script setup lang="ts">
import CharacterSummary from './components/CharacterSummary.vue';
import { useRoute } from 'vue-router';
import { version } from '../package.json';
import { VALHEIM_VERSION } from './data/version';
import { useDark } from '@vueuse/core';
import {
  mdiPigVariant,
  mdiHammerWrench,
  mdiFood,
  mdiInformation,
} from '@mdi/js';

const route = useRoute();

const isDark = useDark();

const title = $computed(() => route.meta.title);

const drawer = $ref<boolean | null>(null);

const navigation = [
  {
    to: '/creatures',
    icon: mdiPigVariant,
    title: 'Creatures',
  },
  {
    to: '/equipment',
    icon: mdiHammerWrench,
    title: 'Equipment',
  },
  {
    to: '/food',
    icon: mdiFood,
    title: 'Food',
  },
  {
    to: '/about',
    icon: mdiInformation,
    title: 'About',
  },
];
</script>

<template>
  <v-app :theme="isDark ? 'darkTheme' : 'lightTheme'">
    <v-app-bar color="primary" density="compact">
      <template #prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      </template>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <template #extension>
        <span class="text-caption">Version {{ version }}</span>
        <v-spacer />
        <span class="text-caption">for Valheim {{ VALHEIM_VERSION }}</span>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item
          v-for="item in navigation"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          color="secondary"
        />
      </v-list>
      <character-summary />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
