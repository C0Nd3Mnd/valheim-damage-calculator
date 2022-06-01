import { defineStore } from 'pinia';
import { foods } from '../data/foods';
import { useLocalStorage } from '@vueuse/core';
import { computed } from 'vue';

export const useFoodStore = defineStore('food', () => {
  const active = useLocalStorage<string[]>('food.active', []);

  const items = computed(() => {
    const items = [];

    for (const name of active.value) {
      const food = foods.find((x) => x.name === name);

      if (!food) {
        continue;
      }

      items.push(food);
    }

    return items;
  });

  const health = computed(() =>
    items.value.map(({ health }) => health).reduce((sum, a) => sum + a, 0)
  );

  const stamina = computed(() =>
    items.value.map(({ stamina }) => stamina).reduce((sum, a) => sum + a, 0)
  );

  /**
   * `full` determines whether the food list ("stomach") is full.
   */
  const full = computed(() => active.value.length >= 3);

  function add(name: string) {
    if (full.value) {
      return;
    }

    const index = active.value.indexOf(name);

    if (index > -1) {
      return;
    }

    active.value.push(name);
  }

  function remove(name: string) {
    const index = active.value.indexOf(name);

    if (index === -1) {
      return;
    }

    active.value.splice(index, 1);
  }

  return {
    active,
    items,
    health,
    stamina,
    full,
    add,
    remove,
  };
});
