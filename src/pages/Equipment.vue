<script setup lang="ts">
import { armorOptions } from '../data/armor';
import { ArmorPiece } from '../types';
import { potionOptions } from '../data/potions';
import { useCharacterStore } from '../store/character';
import { mdiShieldSwordOutline, mdiBottleTonic, mdiHeart } from '@mdi/js';

const store = useCharacterStore();

function getName(piece: ArmorPiece) {
  return store[piece].name;
}

function getLevel(piece: ArmorPiece) {
  return store[piece].level + 1;
}

// TODO Move to separate file.
const armorLabels = {
  [ArmorPiece.Helmet]: 'Helmet',
  [ArmorPiece.Chest]: 'Chest',
  [ArmorPiece.Leg]: 'Leg',
  [ArmorPiece.Cape]: 'Cape',
};
</script>

<template>
  <v-row>
    <v-col
      v-for="piece in [
        ArmorPiece.Helmet,
        ArmorPiece.Chest,
        ArmorPiece.Leg,
        ArmorPiece.Cape,
      ]"
      :key="piece"
      cols="12"
      sm="6"
      md="4"
    >
      <v-card>
        <template #title>
          {{ armorLabels[piece] }}
        </template>
        <template #text>
          <v-select
            hide-details
            :model-value="getName(piece)"
            :label="armorLabels[piece]"
            :items="armorOptions(piece)"
            @update:modelValue="store.setArmor(piece, $event)"
          />
          <v-rating
            :model-value="getLevel(piece)"
            :length="store.maxLevels[piece]"
            color="#ffd700"
            hover
            @update:modelValue="store.setLevel(piece, $event)"
          />
        </template>
        <template #append>
          <v-icon style="color: dimgrey">{{ mdiShieldSwordOutline }}</v-icon>
          {{ store.armorByPiece[piece] }} Armor
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <template #title>Potions and Powers</template>
        <template #text>
          <v-select
            v-model="store.activePotions"
            :items="potionOptions()"
            label="Potions"
            hide-details
            multiple
          />
        </template>
        <template #append>
          <v-icon style="color: deeppink">{{ mdiBottleTonic }}</v-icon>
          {{ store.activePotions.length }}
          active
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <template #title>Health</template>
        <template #text>
          <v-slider
            v-model="store.health"
            :min="1"
            :max="250"
            :step="1"
            hide-details
          />
        </template>
        <template #append>
          <v-icon style="color: red">{{ mdiHeart }}</v-icon>
          {{ store.health }} Health
        </template>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="store.health = store.foodHealth + 25">
            Apply from food
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
