import {Hero} from '../app/Hero';

export class DamageCalculator {
  constructor() {

  }

  static calculate(hero1: Hero, hero2: Hero): number {
    const arr = [3, 5, 8, 10, 20, 25, 14, 19];
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
