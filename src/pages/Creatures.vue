<script setup lang="ts">
import { creatureOptions, creatures } from '../data/creatures';
import { computed, ref } from 'vue';
import { Ability, Creature, DamageType, TenacityModifier } from '../types';
import { useCharacterStore } from '../store/character';

const categorizedCreatures = ref(
  creatures.reduce((rv: { [key: string]: Creature[] }, x) => {
    (rv[x.biome] = rv[x.biome] || []).push(x);
    return rv;
  }, {})
);

const characterStore = useCharacterStore();

function multiplier(level: number) {
  return 1 + level * 0.5;
}

function calculateDamage(damage: number) {
  if (damage / 2 > characterStore.totalArmor) {
    return damage - characterStore.totalArmor;
  }

  return (
    Math.round((damage / (characterStore.totalArmor * 4)) * damage * 100) / 100
  );
}

function damageAfterMitigations(ability: Ability, level: number) {
  let total = 0;

  for (const attack of ability.attacks) {
    const modifier = (
      characterStore.activeModifiers as TenacityModifier[]
    ).find((x) => x.type === attack.type);

    if (!modifier) {
      total += attack.damage * multiplier(level);
      continue;
    }

    total += attack.damage * multiplier(level) * modifier.tenacity;
  }

  return calculateDamage(total);
}

function hitsToLethal(ability: Ability, level: number) {
  return Math.ceil(
    characterStore.health / damageAfterMitigations(ability, level)
  );
}

function getCreatureOptions() {
  return creatureOptions();
}

const creatureName = ref('');
const creature = computed(() =>
  creatures.find(({ name }) => name === creatureName.value)
);

const damageTypeLabels = ref({
  [DamageType.Blunt]: 'Blunt',
  [DamageType.Pierce]: 'Pierce',
  [DamageType.Slash]: 'Slash',
  [DamageType.Fire]: 'Fire',
  [DamageType.Poison]: 'Poison',
  [DamageType.Spirit]: 'Spirit',
  [DamageType.Frost]: 'Frost',
  [DamageType.Lightning]: 'Lightning',
});
</script>

<template>
  <h5 class="text-h5">Select Creature</h5>
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
        </v-list-item-header>
      </v-list-item>
    </template>
  </v-list>
</template>
