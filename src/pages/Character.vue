<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { armorOptions } from '../data/armor';
import { ArmorPiece, DamageType, Tenacity, TenacityModifier } from '../types';
import {
  NSelect,
  NRate,
  NInputNumber,
  NCard,
  NGrid,
  NGi,
  NSpace,
} from 'naive-ui';
import { potionOptions } from '../data/potions';
import IconSummary from '../components/IconSummary.vue';

const store = useStore();

function getName(piece: ArmorPiece) {
  return store.state[piece].name;
}

function getArmorOptions(piece: ArmorPiece) {
  return armorOptions(piece);
}

function setArmor(piece: ArmorPiece, name: string) {
  store.commit('setArmor', { piece, name });
}

function getLevel(piece: ArmorPiece) {
  return store.state[piece].level + 1;
}

function setLevel(piece: ArmorPiece, level: number) {
  store.commit('setLevel', { piece, level: level - 1 });
}

const armorByPiece = computed(() => store.getters.armorByPiece);
const maxLevels = computed(() => store.getters.maxLevels);

const activePotions = computed(() => store.state.activePotions);

function getPotionOptions() {
  return potionOptions();
}

function setPotions(potions: string[]) {
  store.commit('setPotions', potions);
}

const health = computed({
  get() {
    return store.state.health;
  },
  set(val: number) {
    store.state.health = val;
  },
});

// TODO Move to separate file.
const armorLabels = ref({
  [ArmorPiece.Helmet]: 'Helmet',
  [ArmorPiece.Chest]: 'Chest',
  [ArmorPiece.Leg]: 'Leg',
  [ArmorPiece.Cape]: 'Cape',
});

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
  <n-grid
    cols="2 xs:1 s:2 m:3 l:4 xl:4 xxl:4"
    responsive="screen"
    :x-gap="12"
    :y-gap="12"
  >
    <n-gi
      v-for="piece in [
        ArmorPiece.Helmet,
        ArmorPiece.Chest,
        ArmorPiece.Leg,
        ArmorPiece.Cape,
      ]"
      :key="piece"
    >
      <n-card :title="armorLabels[piece]">
        <n-select
          :value="getName(piece)"
          :options="getArmorOptions(piece)"
          @update:value="setArmor(piece, $event)"
        />
        <template #footer>
          <n-space justify="space-between">
            <icon-summary
              :value="armorByPiece[piece]"
              icon="shield-sword-outline"
              color="dimgrey"
              label="Armor"
            />
            <n-rate
              :value="getLevel(piece)"
              :count="maxLevels[piece]"
              @update:value="setLevel(piece, $event)"
            />
          </n-space>
        </template>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="Potions">
        <n-select
          :value="activePotions"
          multiple
          @update:value="setPotions"
          :options="getPotionOptions()"
        />
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="Health">
        <n-input-number v-model:value="health" :min="1" :max="300" />
      </n-card>
    </n-gi>
    <n-gi :span="4">
      <n-card title="Summary">
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
    </n-gi>
  </n-grid>
  <!--  FOOD: <n-select multiple :max-tag-count="3" />-->
</template>
