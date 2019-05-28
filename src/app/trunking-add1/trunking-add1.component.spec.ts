import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkingAdd1Component } from './trunking-add1.component';

describe('TrunkingAdd1Component', () => {
  let component: TrunkingAdd1Component;
  let fixture: ComponentFixture<TrunkingAdd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkingAdd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkingAdd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
