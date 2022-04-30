<script setup lang="ts">
import { NCard, NSpace } from 'naive-ui';
import IconSummary from './IconSummary.vue';
import { useStore } from 'vuex';
import { DamageType, Tenacity, TenacityModifier } from '../types';
import { computed } from 'vue';

const store = useStore();

function getDamageTypeTenacity(type: DamageType): string {
  const modifier = (store.getters.activeModifiers as TenacityModifier[]).find(
    (x) => x.type === type
  );

  if (!modifier) {
    return Tenacity.Neutral * 100 + '%';
  }

  return modifier.tenacity * 100 + '%';
}

const summaryElements = computed(() => {
  const elements = [
    {
      label: 'Total armor',
      icon: 'shield-sword-outline',
      color: 'dimgrey',
      value: store.getters.totalArmor,
    },
    {
      label: 'Health',
      icon: 'heart',
      color: 'red',
      value: store.state.health,
    },
    {
      label: 'Blunt modifier',
      icon: 'baseball-bat',
      color: 'burlywood',
      value: getDamageTypeTenacity(DamageType.Blunt),
    },
    {
      label: 'Pierce modifier',
      icon: 'bow-arrow',
      color: 'brown',
      value: getDamageTypeTenacity(DamageType.Pierce),
    },
    {
      label: 'Slash modifier',
      icon: 'sword',
      color: 'silver',
      value: getDamageTypeTenacity(DamageType.Slash),
    },
    {
      label: 'Fire modifier',
      icon: 'fire',
      color: 'orange',
      value: getDamageTypeTenacity(DamageType.Fire),
    },
    {
      label: 'Poison modifier',
      icon: 'skull-crossbones',
      color: 'green',
      value: getDamageTypeTenacity(DamageType.Poison),
    },
    {
      label: 'Spirit modifier',
      icon: 'ghost',
      color: 'cadetblue',
      value: getDamageTypeTenacity(DamageType.Spirit),
    },
    {
      label: 'Frost modifier',
      icon: 'snowflake',
      color: 'lightskyblue',
      value: getDamageTypeTenacity(DamageType.Frost),
    },
    {
      label: 'Lightning modifier',
      icon: 'flash',
      color: 'gold',
      value: getDamageTypeTenacity(DamageType.Lightning),
    },
  ];

  return elements;
});
</script>

<template>
  <n-card title="Character Summary">
    <n-space justify="space-between">
      <icon-summary
        v-for="element in summaryElements"
        :key="element.label"
        :value="element.value"
        :icon="element.icon"
        :color="element.color"
        :label="element.label"
      />
    </n-space>
  </n-card>
</template>
