import { DamageType, Potion, Tenacity } from '../types';

export const potions: Potion[] = [
  {
    name: 'Fire resistance barley wine',
    tenacityModifiers: [
      {
        type: DamageType.Fire,
        tenacity: Tenacity.Resistant,
      },
    ],
  },
  {
    name: 'Frost resistance mead',
    tenacityModifiers: [
      {
        type: DamageType.Frost,
        tenacity: Tenacity.Resistant,
      },
    ],
  },
  {
    name: 'Poison resistance mead',
    tenacityModifiers: [
      {
        type: DamageType.Poison,
        tenacity: Tenacity.VeryResistant,
      },
    ],
  },
];

export function potionOptions() {
  return potions.map(({ name }) => name);
}
