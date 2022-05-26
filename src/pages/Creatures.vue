<script setup lang="ts">
import { creatures } from '../data/creatures';
import { Creature } from '../types';

interface CategorizedCreatures {
  [key: string]: Creature[];
}

const categorizedCreatures = $computed<CategorizedCreatures>(
  () =>
    creatures.reduce((rv: CategorizedCreatures, x) => {
      (rv[x.biome] = rv[x.biome] || []).push(x);
      return rv;
    }, {}) as CategorizedCreatures
);
</script>

<template>
  <h5 class="text-h5">Select Creature</h5>
  {{ categorizedCreatures }}
  <v-list>
    <template v-for="(category, i) in categorizedCreatures" :key="i">
      <v-list-subheader>{{ i }}</v-list-subheader>
      <v-list-item
        v-for="creature in category"
        :key="creature.name"
        :to="`/creatures/${creature.name}`"
      >
        <v-list-item-header>
          <v-list-item-title>{{ creature.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ creature }}</v-list-item-subtitle>
        </v-list-item-header>
      </v-list-item>
    </template>
  </v-list>
</template>
