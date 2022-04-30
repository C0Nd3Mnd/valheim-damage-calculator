import { Creature, DamageType } from '../types';

export const creatures: Creature[] = [
  {
    name: 'Boar',
    maxLevel: 2,
    abilities: [
      {
        name: 'Charge and retreat',
        attacks: [{ type: DamageType.Blunt, damage: 10 }],
      },
    ],
  },
  {
    name: 'Neck',
    maxLevel: 2,
    abilities: [
      {
        name: 'Bite',
        attacks: [{ type: DamageType.Slash, damage: 6 }],
      },
    ],
  },
  {
    name: 'Greyling',
    maxLevel: 0,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Slash, damage: 5 }],
      },
    ],
  },
  {
    name: 'Greydwarf shaman',
    maxLevel: 2,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Slash, damage: 14 }],
      },
      {
        name: 'Poison spray',
        attacks: [{ type: DamageType.Poison, damage: 30 }],
      },
    ],
  },
  {
    name: 'Fuling',
    maxLevel: 2,
    abilities: [
      {
        name: 'Club',
        attacks: [{ type: DamageType.Blunt, damage: 85 }],
      },
      {
        name: 'Spear',
        attacks: [{ type: DamageType.Pierce, damage: 85 }],
      },
      {
        name: 'Sword',
        attacks: [{ type: DamageType.Slash, damage: 85 }],
      },
      {
        name: 'Torch',
        attacks: [
          { type: DamageType.Blunt, damage: 45 },
          { type: DamageType.Fire, damage: 45 },
        ],
      },
    ],
  },
];

export function creatureOptions() {
  return creatures.map(({ name }) => ({
    label: name,
    value: name,
  }));
}
