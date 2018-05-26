export class FightLog {
  private _log: string[];

  constructor() {
    this.log = [];
  }

  /*
   * Clears the log
   */
  public clear(): void {
    this.log = [];
  }

  /*
   * Adds to log
   */
  public add(log: string): void {
    this.log.push(log);
  }


  get log(): string[] {
    return this._log;
  }

  set log(value: string[]) {
    this._log = value;
  }
}
