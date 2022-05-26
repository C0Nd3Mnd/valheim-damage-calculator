<script setup lang="ts">
import { foodOptions, foods } from '../data/foods';
import { computed, ref, watch } from 'vue';
import { Food, FoodDecay } from '../types';
import { LineChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { useCharacterStore } from '../store/character';
import {
  mdiHeart,
  mdiRun,
  mdiTimer,
  mdiPlusCircle,
  mdiMinusCircle,
} from '@mdi/js';

Chart.register(...registerables);

const store = useCharacterStore();

interface SelectableFood extends Food {
  selected: boolean;
}

const foodCards = $computed<SelectableFood[]>(() => {
  return foods
    .map((food) => ({
      ...food,
      selected: store.activeFoods.includes(food.name),
    }))
    .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
    .sort((a, b) => (a.selected > b.selected ? -1 : 1))
    .filter((x) =>
      x.name.toLowerCase().replace(/ /g, '').includes(foodCardsFilter)
    );
});

let foodCardsFilterTerm = $ref('');

const foodCardsFilter = $computed(() =>
  foodCardsFilterTerm.toLowerCase().replace(/\s/g, '')
);

function toggleFood(card: SelectableFood) {
  return card.selected ? store.removeFood(card.name) : store.addFood(card.name);
}

const foodDecay = computed(() => {
  const foods = store.foodItems as Food[];

  const points: FoodDecay[] = [];

  for (let i = 0; i <= 1800; i += 60) {
    let healthBonus = 0;
    let staminaBonus = 0;

    for (const food of foods.filter(({ duration }) => duration >= i)) {
      healthBonus +=
        food.health * Math.pow((food.duration - i) / food.duration, 0.3);
      staminaBonus +=
        food.stamina * Math.pow((food.duration - i) / food.duration, 0.3);
    }

    points.push({
      time: i,
      health: healthBonus,
      stamina: staminaBonus,
    });
  }

  return points;
});

const foodChart = computed<ChartData>(() => {
  return {
    labels: foodDecay.value.map(({ time }) => time / 60),
    datasets: [
      {
        label: 'Health',
        borderColor: 'red',
        data: foodDecay.value.map(({ health }) => health + 25),
      },
      {
        label: 'Stamina',
        borderColor: 'goldenrod',
        data: foodDecay.value.map(({ stamina }) => stamina + 50),
      },
    ],
  };
});

const chartOptions = computed<ChartOptions>(() => ({
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Duration (minutes)',
      },
    },
    y: {
      display: true,
      min: 0,
    },
  },
}));
</script>

<template>
  <h5 class="text-h5">Food</h5>
  <v-row>
    <v-col cols="12">
      <v-card>
        <template #append>
          <v-icon style="color: red">{{ mdiHeart }}</v-icon>
          25 + {{ store.foodHealth }}
          <v-icon style="color: goldenrod">{{ mdiRun }}</v-icon>
          50 + {{ store.foodStamina }}
        </template>
        <v-card-text>
          <LineChart :chart-data="foodChart" :options="chartOptions"
        /></v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-text-field v-model="foodCardsFilterTerm" label="Filter" hide-details />
    </v-col>
    <v-col cols="12" v-if="$vuetify.display.xs">
      <v-list>
        <v-list-item
          v-for="card in foodCards"
          :key="card.name"
          :disabled="store.foodMax && !card.selected"
          @click="toggleFood(card)"
        >
          <template #prepend>
            <v-icon v-if="card.selected" color="error">
              {{ mdiMinusCircle }}
            </v-icon>
            <v-icon v-else color="success">{{ mdiPlusCircle }}</v-icon>
            <v-list-item-avatar class="mx-2">
              <v-img :src="card.image" />
            </v-list-item-avatar>
          </template>
          <v-list-item-header>
            <v-list-item-title>{{ card.name }}</v-list-item-title>
            <v-list-item-subtitle>
              <v-icon style="color: red">{{ mdiHeart }}</v-icon>
              {{ card.health }}
              <v-icon style="color: goldenrod">{{ mdiRun }}</v-icon>
              {{ card.stamina }}
              <v-icon style="color: grey">{{ mdiTimer }}</v-icon>
              {{ card.duration }}s
            </v-list-item-subtitle>
          </v-list-item-header>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col
      v-else
      v-for="card in foodCards"
      :key="card.name"
      cols="12"
      sm="6"
      md="3"
      lg="2"
    >
      <v-card
        :disabled="store.foodMax && !card.selected"
        @click="toggleFood(card)"
      >
        <v-card-title class="justify-center">
          <v-avatar class="mr-2" :rounded="0">
            <v-img :src="card.image" />
          </v-avatar>
          <span
            style="
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            "
          >
            {{ card.name }}
          </span>
        </v-card-title>
        <v-card-actions class="px-4">
          <span class="text-body-2">
            <v-icon style="color: red">{{ mdiHeart }}</v-icon>
            {{ card.health }}
            <v-icon style="color: goldenrod">{{ mdiRun }}</v-icon>
            {{ card.stamina }}
            <v-icon style="color: grey">{{ mdiTimer }}</v-icon>
            {{ card.duration }}s
          </span>
          <v-spacer />
          <v-icon v-if="card.selected" color="error">
            {{ mdiMinusCircle }}
          </v-icon>
          <v-icon v-else color="success">{{ mdiPlusCircle }}</v-icon>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
