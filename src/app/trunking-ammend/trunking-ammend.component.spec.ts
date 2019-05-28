import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkingAmmendComponent } from './trunking-ammend.component';

describe('TrunkingAmmendComponent', () => {
  let component: TrunkingAmmendComponent;
  let fixture: ComponentFixture<TrunkingAmmendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkingAmmendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkingAmmendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
