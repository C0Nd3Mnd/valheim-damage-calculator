<script setup lang="ts">
import { computed, ref } from 'vue';
import CharacterSummary from './components/CharacterSummary.vue';
import { useRouter } from 'vue-router';
import packageJSON from '../package.json';
import { VALHEIM_VERSION } from './data/version';

const router = useRouter();

const title = computed(() => router.currentRoute.value.meta.title);

const drawer = ref<boolean | null>(null);

const version = computed(() => packageJSON.version);
const valheimVersion = computed(() => VALHEIM_VERSION);

const navigation = computed(() => [
  {
    to: '/',
    icon: 'mdi-pig-variant',
    title: 'Creatures',
  },
  {
    to: '/equipment',
    icon: 'mdi-hammer-wrench',
    title: 'Equipment',
  },
  {
    to: '/food',
    icon: 'mdi-food',
    title: 'Food',
  },
  {
    to: '/about',
    icon: 'mdi-information',
    title: 'About',
  },
]);
</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <template #prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      </template>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <template #extension>
        <span class="text-caption">Version {{ version }}</span>
        <v-spacer />
        <span class="text-caption">for Valheim {{ valheimVersion }}</span>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item
          v-for="item in navigation"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
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
