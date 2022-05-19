import { Food } from '../types';

import blacksoup from '../assets/food/blacksoup.png';
import bloodpudding from '../assets/food/bloodpudding.png';
import blueberries from '../assets/food/blueberries.png';
import boarjerky from '../assets/food/boarjerky.png';
import bread from '../assets/food/bread.png';
import carrot from '../assets/food/carrot.png';
import carrotsoup from '../assets/food/carrotsoup.png';
import cloudberries from '../assets/food/cloudberries.png';
import cookedboarmeat from '../assets/food/cookedboarmeat.png';
import cookeddeermeat from '../assets/food/cookeddeermeat.png';
import cookedfish from '../assets/food/cookedfish.png';
import cookedloxmeat from '../assets/food/cookedloxmeat.png';
import cookedserpentmeat from '../assets/food/cookedserpentmeat.png';
import cookedwolfmeat from '../assets/food/cookedwolfmeat.png';
import deerstew from '../assets/food/deerstew.png';
import eyescream from '../assets/food/eyescream.png';
import fishwraps from '../assets/food/fishwraps.png';
import grillednecktail from '../assets/food/grillednecktail.png';
import honey from '../assets/food/honey.png';
import loxmeatpie from '../assets/food/loxmeatpie.png';
import mincedmeatsauce from '../assets/food/mincedmeatsauce.png';
import muckshake from '../assets/food/muckshake.png';
import mushroom from '../assets/food/mushroom.png';
import onion from '../assets/food/onion.png';
import onionsoup from '../assets/food/onionsoup.png';
import queensjam from '../assets/food/queensjam.png';
import raspberries from '../assets/food/raspberries.png';
import sausages from '../assets/food/sausages.png';
import serpentstew from '../assets/food/serpentstew.png';
import turnipstew from '../assets/food/turnipstew.png';
import wolfjerky from '../assets/food/wolfjerky.png';
import wolfskewer from '../assets/food/wolfskewer.png';
import yellowmushroom from '../assets/food/yellowmushroom.png';

export const foods: Food[] = [
  {
    name: 'Raspberries',
    health: 7,
    stamina: 20,
    duration: 600,
    image: raspberries,
  },
  {
    name: 'Mushroom',
    health: 15,
    stamina: 15,
    duration: 900,
    image: mushroom,
  },
  {
    name: 'Honey',
    health: 8,
    stamina: 35,
    duration: 900,
    image: blacksoup,
  },
  {
    name: 'Grilled neck tail',
    health: 25,
    stamina: 8,
    duration: 1200,
    image: grillednecktail,
  },
  {
    name: 'Cooked boar meat',
    health: 30,
    stamina: 10,
    duration: 1200,
    image: cookedboarmeat,
  },
  {
    name: 'Cooked deer meat',
    health: 35,
    stamina: 12,
    duration: 1200,
    image: cookeddeermeat,
  },
  {
    name: 'Boar jerky',
    health: 23,
    stamina: 23,
    duration: 1800,
    image: boarjerky,
  },
  {
    name: 'Blueberries',
    health: 8,
    stamina: 25,
    duration: 600,
    image: blueberries,
  },
  {
    name: 'Carrot',
    health: 10,
    stamina: 32,
    duration: 900,
    image: carrot,
  },
  {
    name: 'Yellow mushroom',
    health: 10,
    stamina: 30,
    duration: 600,
    image: yellowmushroom,
  },
  {
    name: 'Carrot soup',
    health: 15,
    stamina: 45,
    duration: 1500,
    image: carrotsoup,
  },
  {
    name: 'Queens jam',
    health: 14,
    stamina: 40,
    duration: 1200,
    image: queensjam,
  },
  {
    name: 'Cooked fish',
    health: 45,
    stamina: 15,
    duration: 1200,
    image: cookedfish,
  },
  {
    name: 'Deer stew',
    health: 45,
    stamina: 15,
    duration: 1500,
    image: deerstew,
  },
  {
    name: 'Minced Meat Sauce',
    health: 40,
    stamina: 13,
    duration: 1500,
    image: mincedmeatsauce,
  },
  {
    name: 'Muckshake',
    health: 16,
    stamina: 50,
    duration: 1200,
    image: muckshake,
  }, // !!!
  {
    name: 'Turnip stew',
    health: 18,
    stamina: 55,
    duration: 1500,
    image: turnipstew,
  },
  {
    name: 'Sausages',
    health: 55,
    stamina: 18,
    duration: 1500,
    image: sausages,
  },
  {
    name: 'Black soup',
    health: 50,
    stamina: 17,
    duration: 1200,
    image: blacksoup,
  },
  {
    name: 'Cooked serpent meat',
    health: 70,
    stamina: 23,
    duration: 1500,
    image: cookedserpentmeat,
  },
  {
    name: 'Serpent stew',
    health: 80,
    stamina: 26,
    duration: 1800,
    image: serpentstew,
  },
  {
    name: 'Onion',
    health: 13,
    stamina: 40,
    duration: 900,
    image: onion,
  },
  {
    name: 'Onion soup',
    health: 20,
    stamina: 60,
    duration: 1200,
    image: onionsoup,
  },
  {
    name: 'Cooked wolf meat',
    health: 45,
    stamina: 15,
    duration: 1200,
    image: cookedwolfmeat,
  },
  {
    name: 'Wolf jerky',
    health: 33,
    stamina: 33,
    duration: 1800,
    image: wolfjerky,
  },
  {
    name: 'Wolf skewer',
    health: 65,
    stamina: 21,
    duration: 1500,
    image: wolfskewer,
  },
  {
    name: 'Eyescream',
    health: 21,
    stamina: 65,
    duration: 1500,
    image: eyescream,
  },
  {
    name: 'Cloudberries',
    health: 13,
    stamina: 40,
    duration: 900,
    image: cloudberries,
  },
  {
    name: 'Cooked lox meat',
    health: 50,
    stamina: 16,
    duration: 1200,
    image: cookedloxmeat,
  },
  {
    name: 'Fish wraps',
    health: 70,
    stamina: 23,
    duration: 1500,
    image: fishwraps,
  },
  {
    name: 'Lox meat pie',
    health: 75,
    stamina: 24,
    duration: 1800,
    image: loxmeatpie,
  },
  {
    name: 'Blood pudding',
    health: 25,
    stamina: 75,
    duration: 1800,
    image: bloodpudding,
  },
  {
    name: 'Bread',
    health: 23,
    stamina: 70,
    duration: 1500,
    image: bread,
  },
];

export function foodOptions() {
  return foods.map(({ name }) => name);
}
