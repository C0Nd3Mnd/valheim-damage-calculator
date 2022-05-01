import { Food } from '../types';

export const foods: Food[] = [
  { name: 'Raspberries', health: 7, stamina: 20, duration: 600 },
  { name: 'Mushroom', health: 15, stamina: 15, duration: 900 },
  { name: 'Honey', health: 8, stamina: 35, duration: 900 },
  { name: 'Grilled neck tail', health: 25, stamina: 8, duration: 1200 },
  { name: 'Cooked boar meat', health: 30, stamina: 10, duration: 1200 },
  { name: 'Cooked deer meat', health: 35, stamina: 12, duration: 1200 },
  { name: 'Boar jerky', health: 23, stamina: 23, duration: 1800 },
  { name: 'Blueberries', health: 8, stamina: 25, duration: 600 },
  { name: 'Carrot', health: 10, stamina: 32, duration: 900 },
  { name: 'Yellow mushroom', health: 10, stamina: 30, duration: 600 },
  { name: 'Carrot soup', health: 15, stamina: 45, duration: 1500 },
  { name: 'Queens jam', health: 14, stamina: 40, duration: 1200 },
  { name: 'Cooked fish', health: 45, stamina: 15, duration: 1200 },
  { name: 'Deer stew', health: 45, stamina: 15, duration: 1500 },
  { name: 'Minced Meat Sauce', health: 40, stamina: 13, duration: 1500 },
  { name: 'Muckshake', health: 16, stamina: 50, duration: 1200 },
  { name: 'Turnip stew', health: 18, stamina: 55, duration: 1500 },
  { name: 'Sausages', health: 55, stamina: 18, duration: 1500 },
  { name: 'Black soup', health: 50, stamina: 17, duration: 1200 },
  { name: 'Cooked serpent meat', health: 70, stamina: 23, duration: 1500 },
  { name: 'Serpent stew', health: 80, stamina: 26, duration: 1800 },
  { name: 'Onion', health: 13, stamina: 40, duration: 900 },
  { name: 'Onion soup', health: 20, stamina: 60, duration: 1200 },
  { name: 'Cooked wolf meat', health: 45, stamina: 15, duration: 1200 },
  { name: 'Wolf jerky', health: 33, stamina: 33, duration: 1800 },
  { name: 'Wolf skewer', health: 65, stamina: 21, duration: 1500 },
  { name: 'Eyescream', health: 21, stamina: 65, duration: 1500 },
  { name: 'Cloudberries', health: 13, stamina: 40, duration: 900 },
  { name: 'Cooked lox meat', health: 50, stamina: 16, duration: 1200 },
  { name: 'Fish wraps', health: 70, stamina: 23, duration: 1500 },
  { name: 'Lox meat pie', health: 75, stamina: 24, duration: 1800 },
  { name: 'Blood pudding', health: 25, stamina: 75, duration: 1800 },
  { name: 'Bread', health: 23, stamina: 70, duration: 1500 },
];

export function foodOptions() {
  return foods.map(({ name }) => name);
}
