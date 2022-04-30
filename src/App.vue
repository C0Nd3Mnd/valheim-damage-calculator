<script setup lang="ts">
import { ref } from 'vue';
import CharacterSummary from './components/CharacterSummary.vue';
const drawer = ref<boolean | null>(null);
</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item to="/" prepend-icon="mdi-home" title="Home" />
        <v-list-item
          to="/character"
          prepend-icon="mdi-account"
          title="Character"
        />
      </v-list>
      <character-summary />
    </v-navigation-drawer>
    <v-main>
      <v-card>
        <router-view />
      </v-card>
    </v-main>
  </v-app>
</template>
