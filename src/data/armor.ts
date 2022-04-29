import { Armor, ArmorPiece, ArmorSet, DamageType, Tenacity } from '../types';

export const armor: Armor[] = [
  {
    name: 'Cape of Odin (DLC)',
    piece: ArmorPiece.Cape,
    tenacityModifiers: [],
    levels: [1, 2, 3, 4],
  },
  {
    name: 'Deer hide cape',
    piece: ArmorPiece.Cape,
    tenacityModifiers: [],
    levels: [1, 2, 3, 4],
  },
  {
    name: 'Troll hide cape',
    piece: ArmorPiece.Cape,
    tenacityModifiers: [],
    levels: [1, 2, 3, 4],
  },
  {
    name: 'Wolf fur cape',
    piece: ArmorPiece.Cape,
    tenacityModifiers: [
      {
        type: DamageType.Frost,
        tenacity: Tenacity.Resistant,
      },
    ],
    levels: [1, 2, 3, 4],
  },
  {
    name: 'Lox cape',
    piece: ArmorPiece.Cape,
    tenacityModifiers: [
      {
        type: DamageType.Frost,
        tenacity: Tenacity.Resistant,
      },
    ],
    levels: [1, 2, 3, 4],
  },
  {
    name: 'Linen cape',
    piece: ArmorPiece.Cape,
    tenacityModifiers: [],
    levels: [1, 2, 3, 4],
  },
  {
    name: 'Yule hat',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [1],
  },
  {
    name: 'Dverger circlet',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [2],
  },
  {
    name: 'Hood of Odin (DLC)',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [1, 2, 3, 4],
  },
  {
    name: 'Leather helmet',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [2, 4, 6, 8],
  },
  {
    name: 'Troll leather helmet',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [6, 8, 10, 12],
  },
  {
    name: 'Bronze helmet',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [8, 10, 12, 14],
  },
  {
    name: 'Root mask',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [
      {
        type: DamageType.Poison,
        tenacity: Tenacity.Resistant,
      },
      {
        type: DamageType.Fire,
        tenacity: Tenacity.Weak,
      },
    ],
    levels: [8, 10, 12, 14],
  },
  {
    name: 'Iron helmet',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [14, 16, 18, 20],
  },
  {
    name: 'Fenris hood',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [10, 12, 14, 16],
  },
  {
    name: 'Drake helmet',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [20, 22, 24, 26],
  },
  {
    name: 'Padded helmet',
    piece: ArmorPiece.Helmet,
    tenacityModifiers: [],
    levels: [26, 28, 30, 32],
  },
  {
    name: 'Rag tunic',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [],
    levels: [1, 2],
  },
  {
    name: 'Leather tunic',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [],
    levels: [2, 4, 6, 8],
  },
  {
    name: 'Troll leather tunic',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [],
    levels: [6, 8, 10, 12],
  },
  {
    name: 'Bronze plate cuirass',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [],
    levels: [8, 10, 12, 14],
  },
  {
    name: 'Root harnesk',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [
      {
        type: DamageType.Pierce,
        tenacity: Tenacity.Resistant,
      },
      {
        type: DamageType.Fire,
        tenacity: Tenacity.Weak,
      },
    ],
    levels: [8, 10, 12, 14],
  },
  {
    name: 'Iron scale mail',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [],
    levels: [14, 16, 18, 20],
  },
  {
    name: 'Fenris coat',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [
      {
        type: DamageType.Frost,
        tenacity: Tenacity.Resistant,
      },
    ],
    levels: [10, 12, 14, 16],
  },
  {
    name: 'Wolf armor chest',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [
      {
        type: DamageType.Frost,
        tenacity: Tenacity.Resistant,
      },
    ],
    levels: [20, 22, 24, 26],
  },
  {
    name: 'Padded cuirass',
    piece: ArmorPiece.Chest,
    tenacityModifiers: [],
    levels: [26, 28, 30, 32],
  },
  {
    name: 'Rag pants',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [],
    levels: [1, 2],
  },
  {
    name: 'Leather pants',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [],
    levels: [2, 4, 6, 8],
  },
  {
    name: 'Troll leather pants',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [],
    levels: [6, 8, 10, 12],
  },
  {
    name: 'Bronze plate leggings',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [],
    levels: [8, 10, 12, 14],
  },
  {
    name: 'Root leggings',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [
      {
        type: DamageType.Pierce,
        tenacity: Tenacity.Resistant,
      },
      {
        type: DamageType.Fire,
        tenacity: Tenacity.Weak,
      },
    ],
    levels: [8, 10, 12, 14],
  },
  {
    name: 'Iron greaves',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [],
    levels: [14, 16, 18, 20],
  },
  {
    name: 'Fenris leggings',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [],
    levels: [10, 12, 14, 16],
  },
  {
    name: 'Wolf armor legs',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [],
    levels: [20, 22, 24, 26],
  },
  {
    name: 'Padded greaves',
    piece: ArmorPiece.Leg,
    tenacityModifiers: [],
    levels: [26, 28, 30, 32],
  },
];

export const armorSets: ArmorSet[] = [
  {
    name: 'Fenris Set',
    pieces: ['Fenris hood', 'Fenris coat', 'Fenris leggings'],
    tenacityModifiers: [
      {
        type: DamageType.Fire,
        tenacity: Tenacity.Resistant,
      },
    ],
  },
];
