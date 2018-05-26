import {Race} from './Race';

export class Hero {

  private _name: string;

  private _level: number;

  private _race: Race;

  private _health: number;
  private _strength: number;
  private _agility: number;
  private _vitality: number;
  private _durability: number;
  private _anger: number;
  private _luck: number;
  private _body: number;
  private _reaction: number;

  constructor() {
  }

  takeDamage(damage: number) {
    this.health -= damage;
  }

  public toString(): string {
    return 'Hero, name: ' + this.name + '. Level: ' + this.level + ', race: ' + this.race +
      ', health: ' + this.health + ', agility: ' + this.agility + ', vitality: ' + this.vitality +
      ', durability: ' + this.durability + ', anger: ' + this.anger + ', luck: ' + this.luck;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get race(): Race {
    return this._race;
  }

  set race(value: Race) {
    this._race = value;
  }

  get health(): number {
    return this._health;
  }

  set health(value: number) {
    this._health = value;
  }

  get strength(): number {
    return this._strength;
  }

  set strength(value: number) {
    this._strength = value;
  }

  get agility(): number {
    return this._agility;
  }

  set agility(value: number) {
    this._agility = value;
  }

  get vitality(): number {
    return this._vitality;
  }

  set vitality(value: number) {
    this._vitality = value;
  }

  get durability(): number {
    return this._durability;
  }

  set durability(value: number) {
    this._durability = value;
  }

  get anger(): number {
    return this._anger;
  }

  set anger(value: number) {
    this._anger = value;
  }

  get luck(): number {
    return this._luck;
  }

  set luck(value: number) {
    this._luck = value;
  }

  get body(): number {
    return this._body;
  }

  set body(value: number) {
    this._body = value;
  }

  get reaction(): number {
    return this._reaction;
  }

  set reaction(value: number) {
    this._reaction = value;
  }
}
