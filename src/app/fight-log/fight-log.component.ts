import { Component, OnInit } from '@angular/core';

import {heroes} from '../../mock/heroes';
import {Fight} from '../Fight';

@Component({
  selector: 'app-fight-log',
  templateUrl: './fight-log.component.html',
  styleUrls: ['./fight-log.component.scss']
})
export class FightLogComponent implements OnInit {


  public fight: Fight;

  constructor() {
    console.log(heroes);
    this.fight = new Fight(heroes[0], heroes[1]);
    this.fight.fight();
  }

  ngOnInit() {

  }

}
