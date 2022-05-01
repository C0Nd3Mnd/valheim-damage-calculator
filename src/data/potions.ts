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
  {
    name: 'Bonemass Power',
    tenacityModifiers: [
      {
        type: DamageType.Blunt,
        tenacity: Tenacity.Resistant,
      },
      {
        type: DamageType.Slash,
        tenacity: Tenacity.Resistant,
      },
      {
        type: DamageType.Pierce,
        tenacity: Tenacity.Resistant,
      },
    ],
  },
  {
    name: 'Yagluth Power',
    tenacityModifiers: [
      {
        type: DamageType.Fire,
        tenacity: Tenacity.Resistant,
      },
      {
        type: DamageType.Frost,
        tenacity: Tenacity.Resistant,
      },
      {
        type: DamageType.Lightning,
        tenacity: Tenacity.Resistant,
      },
    ],
  },
];

export function potionOptions() {
  return potions.map(({ name }) => name);
}
