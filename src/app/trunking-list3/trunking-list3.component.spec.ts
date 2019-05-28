import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkingList3Component } from './trunking-list3.component';

describe('TrunkingList3Component', () => {
  let component: TrunkingList3Component;
  let fixture: ComponentFixture<TrunkingList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkingList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkingList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
