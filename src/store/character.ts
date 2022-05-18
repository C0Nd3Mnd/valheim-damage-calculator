import { defineStore } from 'pinia';
import { ArmorPiece, Food, Tenacity, TenacityModifier } from '../types';
import { armorSets, pieceByName } from '../data/armor';
import { potions } from '../data/potions';
import { foods } from '../data/foods';
import { computed, reactive, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { $computed } from 'vue/macros';

// export const newChStoreTmp = defineStore('tmpch', () => {
//   const pieces = $ref(
//     useLocalStorage('character.pieces', {
//       helmet: { name: '', level: 0 },
//       chest: { name: '', level: 0 },
//       leg: { name: '', level: 0 },
//       cape: { name: '', level: 0 },
//     })
//   );
//
//   const activePotions: string[] = $ref(
//     useLocalStorage('character.activePotions', [])
//   );
//
//   const activeFoods: string[] = $ref(
//     useLocalStorage('character.activeFoods', [])
//   );
//
//   let health = $ref(useLocalStorage('character.health', 25));
//
//   const armorByPiece = $computed(() => {
//     const foo = {};
//
//     for (const keyof Object.keys(pieces)) {
//       foo[key] = (pieces[key].name)?.levels[pieces[key].level] || 0
//     }
//   });
// });

export const useCharacterStore = defineStore({
  id: 'character',
  state: () => ({
    [ArmorPiece.Helmet]: useLocalStorage('character.helmet', {
      name: '',
      level: 0,
    }),
    [ArmorPiece.Chest]: useLocalStorage('character.chest', {
      name: '',
      level: 0,
    }),
    [ArmorPiece.Leg]: useLocalStorage('character.leg', {
      name: '',
      level: 0,
    }),
    [ArmorPiece.Cape]: useLocalStorage('character.cape', {
      name: '',
      level: 0,
    }),
    activePotions: useLocalStorage('character.activePotions', [] as string[]),
    health: useLocalStorage('character.health', 25),
    activeFoods: useLocalStorage('character.activeFoods', [] as string[]),
  }),
  getters: {
    armorByPiece(state) {
      return {
        [ArmorPiece.Helmet]:
          pieceByName(state[ArmorPiece.Helmet].name)?.levels[
            state[ArmorPiece.Helmet].level
          ] || 0,
        [ArmorPiece.Chest]:
          pieceByName(state[ArmorPiece.Chest].name)?.levels[
            state[ArmorPiece.Chest].level
          ] || 0,
        [ArmorPiece.Leg]:
          pieceByName(state[ArmorPiece.Leg].name)?.levels[
            state[ArmorPiece.Leg].level
          ] || 0,
        [ArmorPiece.Cape]:
          pieceByName(state[ArmorPiece.Cape].name)?.levels[
            state[ArmorPiece.Cape].level
          ] || 0,
      };
    },
    totalArmor(state) {
      let total = 0;

      if (state[ArmorPiece.Helmet]) {
        const levels = pieceByName(state[ArmorPiece.Helmet].name)?.levels;

        if (levels) {
          total += levels[state[ArmorPiece.Helmet].level] || 0;
        }
      }

      if (state[ArmorPiece.Chest]) {
        const levels = pieceByName(state[ArmorPiece.Chest].name)?.levels;

        if (levels) {
          total += levels[state[ArmorPiece.Chest].level] || 0;
        }
      }

      if (state[ArmorPiece.Leg]) {
        const levels = pieceByName(state[ArmorPiece.Leg].name)?.levels;

        if (levels) {
          total += levels[state[ArmorPiece.Leg].level] || 0;
        }
      }

      if (state[ArmorPiece.Cape]) {
        const levels = pieceByName(state[ArmorPiece.Cape].name)?.levels;

        if (levels) {
          total += levels[state[ArmorPiece.Cape].level] || 0;
        }
      }

      return total;
    },
    maxLevels(state) {
      return {
        [ArmorPiece.Helmet]:
          pieceByName(state[ArmorPiece.Helmet].name)?.levels?.length || 0,
        [ArmorPiece.Chest]:
          pieceByName(state[ArmorPiece.Chest].name)?.levels?.length || 0,
        [ArmorPiece.Leg]:
          pieceByName(state[ArmorPiece.Leg].name)?.levels?.length || 0,
        [ArmorPiece.Cape]:
          pieceByName(state[ArmorPiece.Cape].name)?.levels?.length || 0,
      };
    },
    activeModifiers(state) {
      let modifiers: TenacityModifier[] = [];

      const pieces: string[] = [];

      for (const armorPiece of [
        ArmorPiece.Helmet,
        ArmorPiece.Chest,
        ArmorPiece.Leg,
        ArmorPiece.Cape,
      ]) {
        if (!state[armorPiece].name) {
          continue;
        }

        pieces.push(state[armorPiece].name);
      }

      for (const name of state.activePotions) {
        const potion = potions.find((x) => x.name === name);

        if (!potion) {
          continue;
        }

        modifiers = [...modifiers, ...potion.tenacityModifiers];
      }

      for (const armorSet of armorSets) {
        if (!armorSet.pieces.every((x) => pieces.includes(x))) {
          continue;
        }

        modifiers = [...modifiers, ...armorSet.tenacityModifiers];
      }

      for (const name of pieces) {
        const piece = pieceByName(name);

        if (!piece) {
          continue;
        }

        modifiers = [...modifiers, ...piece.tenacityModifiers];
      }

      const reducedModifiers: TenacityModifier[] = [];

      for (const modifier of modifiers) {
        let reducedModifier = reducedModifiers.find(
          (r) => r.type === modifier.type
        );

        if (reducedModifier) {
          // Tenacity priority:
          // {@link Tenacity.Immunity}
          // {@link Tenacity.VeryResistant}
          // {@link Tenacity.Resistant}
          // {@link Tenacity.VeryWeak}
          // {@link Tenacity.Weak}
          // {@link Tenacity.Neutral}
          if (reducedModifier.tenacity === Tenacity.Neutral) {
            reducedModifier.tenacity = modifier.tenacity;
          } else if (
            reducedModifier.tenacity === Tenacity.Weak &&
            modifier.tenacity === Tenacity.VeryWeak
          ) {
            reducedModifier.tenacity = modifier.tenacity;
          } else if (modifier.tenacity < reducedModifier.tenacity) {
            reducedModifier.tenacity = modifier.tenacity;
          }
        } else {
          reducedModifiers.push(modifier);
        }
      }

      return reducedModifiers;
    },
    foodItems(state): Food[] {
      const items = [];

      for (const name of state.activeFoods) {
        const food = foods.find((x) => x.name === name);

        if (!food) {
          continue;
        }

        items.push(food);
      }

      return items;
    },
    foodHealth(state): number {
      return this.foodItems
        .map(({ health }) => health)
        .reduce((sum, a) => sum + a, 0);
    },
    foodStamina(state): number {
      return this.foodItems
        .map(({ stamina }) => stamina)
        .reduce((sum, a) => sum + a, 0);
    },
  },
  actions: {
    setArmor(piece: ArmorPiece, name: string) {
      if (name === '') {
        this[piece].name = '';
        this[piece].level = 0;
        return;
      }

      const newPiece = pieceByName(name);

      if (!newPiece) {
        throw new Error(`Attempted to set to non-existing piece ${name}!`);
      }

      this[piece].name = name;

      if (this[piece].level > newPiece.levels.length - 1) {
        this[piece].level = newPiece.levels.length - 1;
      }
    },
    setLevel(piece: ArmorPiece, level: number) {
      this[piece].level = level;
    },
    setPotions(potions: string[]) {
      this.activePotions = potions;
    },
  },
});
