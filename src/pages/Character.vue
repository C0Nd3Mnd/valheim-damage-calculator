<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { armorOptions } from '../data/armor';
import { ArmorPiece, DamageType, Tenacity, TenacityModifier } from '../types';
import { potionOptions } from '../data/potions';

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
            :items="getArmorOptions(piece)"
            @update:modelValue="setArmor(piece, $event)"
          />
          <v-rating
            :model-value="getLevel(piece)"
            :length="maxLevels[piece]"
            color="#ffd700"
            hover
            @update:modelValue="setLevel(piece, $event)"
          />
        </template>
        <template #append>
          <v-icon style="color: dimgrey">mdi-shield-sword-outline</v-icon>
          {{ armorByPiece[piece] }} Armor
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <template #title>Potions and Powers</template>
        <template #text>
          <v-select
            :model-value="activePotions"
            :items="getPotionOptions()"
            label="Potions"
            hide-details
            multiple
            @update:modelValue="setPotions"
          />
        </template>
        <template #append>
          <v-icon style="color: deeppink">mdi-bottle-tonic</v-icon>
          {{ activePotions.length }}
          {{
            activePotions.length === 1 ? 'potion/power' : 'potions/powers'
          }}
          active
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <template #title>Health</template>
        <template #text>
          <v-slider v-model="health" :min="1" :max="225" :step="1" />
        </template>
        <template #append>
          <v-icon style="color: red">mdi-heart</v-icon>
          {{ health }} Health
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
