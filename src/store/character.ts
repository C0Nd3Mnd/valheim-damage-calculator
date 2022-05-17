import { defineStore } from 'pinia';
import { ArmorPiece } from '../types';

export const useCharacterStore = defineStore('character', {
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
    activeFoods: [] as string[],
  }),
});
