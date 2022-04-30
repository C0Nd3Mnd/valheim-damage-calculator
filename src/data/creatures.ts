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
    name: 'Greydwarf',
    maxLevel: 2,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Slash, damage: 14 }],
      },
      {
        name: 'Throw a stone',
        attacks: [{ type: DamageType.Blunt, damage: 10 }],
      },
    ],
  },
  {
    name: 'Greydwarf brute',
    maxLevel: 2,
    abilities: [
      {
        name: 'Slash',
        attacks: [{ type: DamageType.Slash, damage: 30 }],
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
    name: 'Troll',
    maxLevel: 2,
    abilities: [
      {
        name: 'Punch / Log swing',
        attacks: [{ type: DamageType.Blunt, damage: 60 }],
      },
      {
        name: 'Ground slam / Log overhead',
        attacks: [{ type: DamageType.Blunt, damage: 70 }],
      },
      {
        name: 'Throw a stone',
        attacks: [{ type: DamageType.Blunt, damage: 50 }],
      },
    ],
  },
  {
    name: 'Ghost',
    maxLevel: 0,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Slash, damage: 25 }],
      },
    ],
  },
  {
    name: 'Skeleton',
    maxLevel: 2,
    abilities: [
      {
        name: 'Sword',
        attacks: [{ type: DamageType.Slash, damage: 25 }],
      },
      {
        name: 'Bow',
        attacks: [{ type: DamageType.Pierce, damage: 20 }],
      },
    ],
  },
  {
    name: 'Rancid remains',
    maxLevel: 2,
    abilities: [
      {
        name: 'Melee',
        attacks: [
          { type: DamageType.Blunt, damage: 20 },
          { type: DamageType.Poison, damage: 30 },
        ],
      },
    ],
  },
  {
    name: 'Root',
    maxLevel: 2,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Blunt, damage: 55 }],
      },
    ],
  },
  {
    name: 'Abomination',
    maxLevel: 0,
    abilities: [
      {
        name: '???1',
        attacks: [{ type: DamageType.Blunt, damage: 60 }],
      },
      {
        name: '???2',
        attacks: [{ type: DamageType.Blunt, damage: 80 }],
      },
      {
        name: '???3',
        attacks: [{ type: DamageType.Blunt, damage: 80 }],
      },
    ],
  },
  {
    name: 'Blob',
    maxLevel: 0,
    abilities: [
      {
        name: 'Poison AoE',
        attacks: [{ type: DamageType.Poison, damage: 90 }],
      },
    ],
  },
  {
    name: 'Oozer',
    maxLevel: 0,
    abilities: [
      {
        name: 'Poison AoE',
        attacks: [{ type: DamageType.Poison, damage: 115 }],
      },
    ],
  },
  {
    name: 'Draugr',
    maxLevel: 2,
    abilities: [
      {
        name: 'Axe',
        attacks: [{ type: DamageType.Slash, damage: 48 }],
      },
      {
        name: 'Bow',
        attacks: [{ type: DamageType.Pierce, damage: 48 }],
      },
    ],
  },
  {
    name: 'Draugr elite',
    maxLevel: 2,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Slash, damage: 58 }],
      },
    ],
  },
  {
    name: 'Leech',
    maxLevel: 2,
    abilities: [
      {
        name: 'Bite',
        attacks: [
          { type: DamageType.Pierce, damage: 20 },
          { type: DamageType.Poison, damage: 70 },
        ],
      },
    ],
  },
  {
    name: 'Surtling',
    maxLevel: 2,
    abilities: [
      {
        name: 'Fireball',
        attacks: [
          { type: DamageType.Blunt, damage: 10 },
          { type: DamageType.Fire, damage: 40 },
        ],
      },
    ],
  },
  {
    name: 'Wraith',
    maxLevel: 0,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Slash, damage: 60 }],
      },
    ],
  },
  {
    name: 'Wolf',
    maxLevel: 2,
    abilities: [
      {
        name: 'Bite',
        attacks: [{ type: DamageType.Slash, damage: 70 }],
      },
    ],
  },
  {
    name: 'Drake',
    maxLevel: 0,
    abilities: [
      {
        name: 'Frost ball (3x)',
        attacks: [{ type: DamageType.Frost, damage: 90 }],
      },
    ],
  },
  {
    name: 'Fenring',
    maxLevel: 0,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Slash, damage: 85 }],
      },
      {
        name: 'Leap',
        attacks: [{ type: DamageType.Slash, damage: 95 }],
      },
    ],
  },
  {
    name: 'Stone Golem',
    maxLevel: 0,
    abilities: [
      {
        name: 'Sledge (Slam/Double Smash)',
        attacks: [{ type: DamageType.Blunt, damage: 110 }],
      },
      {
        name: 'Spike/Sweep',
        attacks: [{ type: DamageType.Pierce, damage: 110 }],
      },
    ],
  },
  {
    name: 'Bat',
    maxLevel: 0,
    abilities: [
      {
        name: '???',
        attacks: [{ type: DamageType.Slash, damage: 20 }],
      },
    ],
  },
  {
    name: 'Ulv',
    maxLevel: 0,
    abilities: [
      {
        name: '???1',
        attacks: [{ type: DamageType.Slash, damage: 70 }],
      },
      {
        name: '???2',
        attacks: [{ type: DamageType.Slash, damage: 80 }],
      },
    ],
  },
  {
    name: 'Cultist',
    maxLevel: 0,
    abilities: [
      {
        name: 'Stream of flame',
        attacks: [{ type: DamageType.Fire, damage: 50 }],
      },
      {
        name: 'Claws attack',
        attacks: [{ type: DamageType.Blunt, damage: 75 }],
      },
    ],
  },
  {
    name: 'Deathsquito',
    maxLevel: 0,
    abilities: [
      {
        name: 'Charge and retreat',
        attacks: [{ type: DamageType.Pierce, damage: 90 }],
      },
    ],
  },
  {
    name: 'Lox',
    maxLevel: 0,
    abilities: [
      {
        name: 'Bite',
        attacks: [{ type: DamageType.Slash, damage: 130 }],
      },
      {
        name: 'Stomp',
        attacks: [{ type: DamageType.Blunt, damage: 120 }],
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
  {
    name: 'Fuling berserker',
    maxLevel: 2,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Blunt, damage: 130 }],
      },
      {
        name: 'Triple strike',
        attacks: [{ type: DamageType.Blunt, damage: 130 }],
      },
    ],
  },
  {
    name: 'Fuling shaman',
    maxLevel: 0,
    abilities: [
      {
        name: 'Melee',
        attacks: [{ type: DamageType.Blunt, damage: 100 }],
      },
      {
        name: 'Fireball',
        attacks: [
          { type: DamageType.Blunt, damage: 20 },
          { type: DamageType.Fire, damage: 100 },
        ],
      },
    ],
  },
  {
    name: 'Growth',
    maxLevel: 0,
    abilities: [
      {
        name: 'Ranged (6x)',
        attacks: [
          { type: DamageType.Blunt, damage: 45 },
          { type: DamageType.Poison, damage: 50 },
        ],
      },
    ],
  },
  {
    name: 'Serpent',
    maxLevel: 0,
    abilities: [
      {
        name: 'Bite',
        attacks: [{ type: DamageType.Slash, damage: 70 }],
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
