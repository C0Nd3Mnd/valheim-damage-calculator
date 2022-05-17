<script setup lang="ts">
import { foodOptions } from '../data/foods';
import { computed, watch } from 'vue';
import { Food, FoodDecay } from '../types';
import { LineChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { useCharacterStore } from '../store/character';

Chart.register(...registerables);

const store = useCharacterStore();

function getFoodOptions() {
  return foodOptions();
}

const activeFoods = computed(() => store.activeFoods);

const foodHealth = computed(() => store.foodHealth);

const foodStamina = computed(() => store.foodStamina);

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
  <v-row>
    <v-col cols="12">
      <v-card>
        <template #title>Food</template>
        <template #append>
          <v-icon style="color: red">mdi-heart</v-icon>
          25 + {{ foodHealth }}
          <v-icon style="color: goldenrod">mdi-run</v-icon>
          50 + {{ foodStamina }}
        </template>
        <template #text>
          <v-select
            :model-value="activeFoods"
            :items="getFoodOptions()"
            label="Food"
            hide-details
            chips
            multiple
          />
        </template>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <LineChart :chart-data="foodChart" :options="chartOptions" />
    </v-col>
  </v-row>
</template>
