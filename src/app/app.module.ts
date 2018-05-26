import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BemModule} from 'angular-bem';

import { AppComponent } from './app.component';
import { FightLogComponent } from './fight-log/fight-log.component';
import { FightComponent } from './fight/fight.component';


@NgModule({
  declarations: [
    AppComponent,
    FightLogComponent,
    FightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
