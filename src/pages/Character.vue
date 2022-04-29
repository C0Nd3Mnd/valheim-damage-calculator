<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { armor, armorSelect } from '../data/armor';
import { ArmorPiece } from '../types';
import { NSelect, NRate } from 'naive-ui';

const store = useStore();

// const helmet = computed({
//   get() {
//     return store.state[ArmorPiece.Helmet].name;
//   },
//   set(val) {
//     store.commit('setArmor', {
//       piece: ArmorPiece.Helmet,
//       name: val,
//     });
//   },
// });
// const helmetLevel = computed({
//   get() {
//     return store.state[ArmorPiece.Helmet].level + 1;
//   },
//   set(val: number) {
//     store.commit('setLevel', {
//       piece: ArmorPiece.Helmet,
//       level: val - 1,
//     });
//   },
// });
//
// const chest = computed({
//   get() {
//     return store.state[ArmorPiece.Chest].name;
//   },
//   set(val) {
//     store.commit('setArmor', {
//       piece: ArmorPiece.Chest,
//       name: val,
//     });
//   },
// });
// const chestLevel = computed({
//   get() {
//     return store.state[ArmorPiece.Chest].level + 1;
//   },
//   set(val: number) {
//     store.commit('setLevel', {
//       piece: ArmorPiece.Chest,
//       level: val - 1,
//     });
//   },
// });
//
// const leg = computed({
//   get() {
//     return store.state[ArmorPiece.Leg].name;
//   },
//   set(val) {
//     store.commit('setArmor', {
//       piece: ArmorPiece.Leg,
//       name: val,
//     });
//   },
// });
// const legLevel = computed({
//   get() {
//     return store.state[ArmorPiece.Leg].level + 1;
//   },
//   set(val: number) {
//     store.commit('setLevel', {
//       piece: ArmorPiece.Leg,
//       level: val - 1,
//     });
//   },
// });
//
// const cape = computed({
//   get() {
//     return store.state[ArmorPiece.Cape].name;
//   },
//   set(val) {
//     store.commit('setArmor', {
//       piece: ArmorPiece.Cape,
//       name: val,
//     });
//   },
// });
// const capeLevel = computed({
//   get() {
//     return store.state[ArmorPiece.Cape].level + 1;
//   },
//   set(val: number) {
//     store.commit('setLevel', {
//       piece: ArmorPiece.Cape,
//       level: val - 1,
//     });
//   },
// });

function getName(piece: ArmorPiece) {
  console.log('xbox', piece);
  return store.state[piece].name;
}

function getLevel(piece: ArmorPiece) {
  return store.state[piece].level;
}

function getOptions(piece: ArmorPiece) {
  return armorSelect(piece);
}

function setArmor(piece: ArmorPiece, name: string) {
  store.commit('setArmor', { piece, name });
}

function setLevel(piece: ArmorPiece, level: number) {
  store.commit('setLevel', { piece, level });
}

const totalArmor = computed(() => store.getters.totalArmor);
const maxLevels = computed(() => store.getters.maxLevels);
</script>

<template>
  {{ totalArmor }}
  <template
    v-for="piece in [
      ArmorPiece.Helmet,
      ArmorPiece.Chest,
      ArmorPiece.Leg,
      ArmorPiece.Cape,
    ]"
    :key="piece"
  >
    <n-select
      :value="getName(piece)"
      :options="getOptions(piece)"
      @update:value="setArmor(piece, $event)"
    />
    <n-rate
      :value="getLevel(piece)"
      :count="maxLevels[piece]"
      @update:value="setLevel(piece, $event)"
    />
  </template>
</template>
