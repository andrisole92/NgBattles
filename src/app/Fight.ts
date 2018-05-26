import {Hero} from './Hero';
import {FightLog} from './FightLog';
import {heroes} from '../mock/heroes';
import {DamageCalculator} from '../mock/DamageCalculator';

export class Fight {

  public heroes: [Hero, Hero];
  public attacker: Hero;
  public defender: Hero;
  public fightLog: FightLog;

  constructor(hero1: Hero, hero2: Hero) {
    this.attacker = hero1;
    this.defender = hero2;
    this.heroes = [hero1, hero2];
    this.fightLog = new FightLog();
  }

  public toString(): string {
    return 'Fight between ' + heroes[0].name + ' and ' + heroes[1].name;
  }

  public fight(): void {
    console.log(this.attacker.health > 0 && this.defender.health > 0);
    console.log(this.attacker.health > 0);
    console.log(this.defender.health > 0);
    while (this.attacker.health > 0 && this.defender.health > 0) {
      // hitting defender, defender is taking damage
      const damage = DamageCalculator.calculate(this.attacker, this.defender);
      // adding the record to the log
      this.defender.takeDamage(damage);
      this.fightLog.add(this.attacker.name + ' hits ' + this.defender.name + ' ' + damage + ' damage');
      // switching attacker and defender
      const hero = this.attacker;
      this.attacker = this.defender;
      this.defender = hero;
    }
    // who is dead?
    const defeatedHero = this.attacker.health <= 0 ? this.attacker : this.defender;
    this.fightLog.add(defeatedHero.name + ' is dead');

  }

}
