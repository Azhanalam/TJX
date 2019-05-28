import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkingAdd2Component } from './trunking-add2.component';

describe('TrunkingAdd2Component', () => {
  let component: TrunkingAdd2Component;
  let fixture: ComponentFixture<TrunkingAdd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkingAdd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkingAdd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
