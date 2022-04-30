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
import CharacterSummary from '../components/CharacterSummary.vue';

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
      <character-summary />
    </n-gi>
  </n-grid>
  <!--  FOOD: <n-select multiple :max-tag-count="3" />-->
</template>
