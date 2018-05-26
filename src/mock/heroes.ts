import {Hero} from '../app/Hero';
import {Race} from '../app/Race';

const hero1 = new Hero();
hero1.name = 'Hero 1';
hero1.level = 1;
hero1.race = Race.Dwarf;
hero1.health = 100;
hero1.strength = 1;
hero1.agility = 1;
hero1.vitality = 1;
hero1.durability = 1;
hero1.anger = 1;
hero1.luck = 1;

const hero2 = Object.assign(new Hero(), hero1);
hero2.name = 'Hero 2';


export const heroes = [
  hero1,
  hero2
];
