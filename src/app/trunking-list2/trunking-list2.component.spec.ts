import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkingList2Component } from './trunking-list2.component';

describe('TrunkingList2Component', () => {
  let component: TrunkingList2Component;
  let fixture: ComponentFixture<TrunkingList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkingList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkingList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
