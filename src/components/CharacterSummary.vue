<script setup lang="ts">
import { DamageType, Tenacity } from '../types';
import { useCharacterStore } from '../store/character';
import {
  mdiShieldSwordOutline,
  mdiHeart,
  mdiBaseballBat,
  mdiBowArrow,
  mdiSword,
  mdiFire,
  mdiSkullCrossbones,
  mdiGhost,
  mdiSnowflake,
  mdiFlash,
} from '@mdi/js';

const store = useCharacterStore();

function getDamageTypeTenacity(type: DamageType): string {
  const modifier = store.activeModifiers.find((x) => x.type === type);

  if (!modifier) {
    return Tenacity.Neutral * 100 + '%';
  }

  return modifier.tenacity * 100 + '%';
}

const summaryElements = $computed(() => {
  return [
    {
      label: 'Total armor',
      icon: mdiShieldSwordOutline,
      color: 'dimgrey',
      value: store.totalArmor,
    },
    {
      label: 'Health',
      icon: mdiHeart,
      color: 'red',
      value: store.health,
    },
    {
      label: 'Blunt modifier',
      icon: mdiBaseballBat,
      color: 'burlywood',
      value: getDamageTypeTenacity(DamageType.Blunt),
    },
    {
      label: 'Pierce modifier',
      icon: mdiBowArrow,
      color: 'brown',
      value: getDamageTypeTenacity(DamageType.Pierce),
    },
    {
      label: 'Slash modifier',
      icon: mdiSword,
      color: 'silver',
      value: getDamageTypeTenacity(DamageType.Slash),
    },
    {
      label: 'Fire modifier',
      icon: mdiFire,
      color: 'orange',
      value: getDamageTypeTenacity(DamageType.Fire),
    },
    {
      label: 'Poison modifier',
      icon: mdiSkullCrossbones,
      color: 'green',
      value: getDamageTypeTenacity(DamageType.Poison),
    },
    {
      label: 'Spirit modifier',
      icon: mdiGhost,
      color: 'cadetblue',
      value: getDamageTypeTenacity(DamageType.Spirit),
    },
    {
      label: 'Frost modifier',
      icon: mdiSnowflake,
      color: 'lightskyblue',
      value: getDamageTypeTenacity(DamageType.Frost),
    },
    {
      label: 'Lightning modifier',
      icon: mdiFlash,
      color: 'gold',
      value: getDamageTypeTenacity(DamageType.Lightning),
    },
  ];
});
</script>

<template>
  <v-list>
    <v-list-subheader>Character Summary</v-list-subheader>
    <v-list-item v-for="element in summaryElements" :key="element.label">
      <v-list-item-avatar>
        <v-icon :style="{ color: element.color }">
          {{ element.icon }}
        </v-icon>
      </v-list-item-avatar>
      <v-list-item-header>
        <v-list-item-title>{{ element.value }}</v-list-item-title>
        <v-list-item-subtitle>{{ element.label }}</v-list-item-subtitle>
      </v-list-item-header>
    </v-list-item>
  </v-list>
</template>
