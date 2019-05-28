import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkingAmendComponent } from './trunking-amend.component';

describe('TrunkingAmendComponent', () => {
  let component: TrunkingAmendComponent;
  let fixture: ComponentFixture<TrunkingAmendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkingAmendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkingAmendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
