<script setup lang="ts">
import { foodOptions, foods } from '../data/foods';
import { computed, watch } from 'vue';
import { Food, FoodDecay } from '../types';
import { LineChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { useCharacterStore } from '../store/character';

Chart.register(...registerables);

const store = useCharacterStore();

const foodCards = computed(() => {
  return foods
    .map((food) => ({
      ...food,
      selected: store.activeFoods.includes(food.name),
    }))
    .sort((a, b) => (a.selected > b.selected ? -1 : 1));
});

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
          <v-icon style="color: red">mdi-heart</v-icon>
          25 + {{ store.foodHealth }}
          <v-icon style="color: goldenrod">mdi-run</v-icon>
          50 + {{ store.foodStamina }}
        </template>
        <v-card-text>
          <LineChart :chart-data="foodChart" :options="chartOptions"
        /></v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="3" lg="2" v-for="card in foodCards">
      <v-card :disabled="store.foodMax && !card.selected">
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
        <v-card-actions>
          <span class="text-body-2 pl-2">
            <v-icon style="color: red">mdi-heart</v-icon>
            {{ card.health }}
            <v-icon style="color: goldenrod">mdi-run</v-icon>
            {{ card.stamina }}
            <v-icon style="color: grey">mdi-timer</v-icon>
            {{ card.duration }}s
          </span>
          <v-spacer />
          <v-btn
            v-if="card.selected"
            icon
            color="error"
            @click="store.removeFood(card.name)"
          >
            <v-icon>mdi-minus-circle</v-icon>
          </v-btn>
          <v-btn
            v-else
            :disabled="store.foodMax"
            icon
            color="success"
            @click="store.addFood(card.name)"
          >
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
