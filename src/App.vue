<script setup lang="ts">
import { computed, ref } from 'vue';
import CharacterSummary from './components/CharacterSummary.vue';
import { useRouter } from 'vue-router';
import packageJSON from '../package.json';

const router = useRouter();

const title = computed(() => router.currentRoute.value.meta.title);

const drawer = ref<boolean | null>(null);

const version = computed(() => packageJSON.version);
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
        <span class="text-caption">for Valheim 0.208.1</span>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item to="/" prepend-icon="mdi-pig-variant" title="Creatures" />
        <v-list-item
          to="/character"
          prepend-icon="mdi-account"
          title="Character"
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
