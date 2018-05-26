import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightLogComponent } from './fight-log.component';

describe('FightLogComponent', () => {
  let component: FightLogComponent;
  let fixture: ComponentFixture<FightLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
