import { App } from 'vue';
import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { armor, armorSets, pieceByName } from '../data/armor';
import { ArmorPiece, TenacityModifier } from '../types';
import { potions } from '../data/potions';

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function setupStore(app: App) {
  const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    supportCircular: true,

    // reducer: (state) => ({ threshold: state.threshold }),
  });

  const store = createStore({
    state: () => ({
      [ArmorPiece.Helmet]: {
        name: '',
        level: 0,
      },
      [ArmorPiece.Chest]: {
        name: '',
        level: 0,
      },
      [ArmorPiece.Leg]: {
        name: '',
        level: 0,
      },
      [ArmorPiece.Cape]: {
        name: '',
        level: 0,
      },
      activePotions: [] as string[],
      health: 25,
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
            if (modifier.tenacity < reducedModifier.tenacity) {
              reducedModifier.tenacity = modifier.tenacity;
            }
          } else {
            reducedModifiers.push(modifier);
          }
        }

        return reducedModifiers;
      },
    },
    mutations: {
      setArmor(state, payload: { piece: ArmorPiece; name: string }) {
        if (payload.name === '') {
          state[payload.piece].name = '';
          state[payload.piece].level = 0;
          return;
        }

        const piece = pieceByName(payload.name);

        if (!piece) {
          throw new Error(
            `Attempted to set to non-existing piece ${payload.name}!`
          );
        }

        state[payload.piece].name = payload.name;

        if (state[payload.piece].level > piece.levels.length - 1) {
          state[payload.piece].level = piece.levels.length - 1;
        }
      },
      setLevel(state, payload: { piece: ArmorPiece; level: number }) {
        state[payload.piece].level = payload.level;
      },
      setPotions(state, potions: string[]) {
        state.activePotions = potions;
      },
    },
    plugins: [vuexLocal.plugin],
  });

  app.use(store);
}
