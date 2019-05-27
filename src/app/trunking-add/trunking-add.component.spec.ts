import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkingAddComponent } from './trunking-add.component';

describe('TrunkingAddComponent', () => {
  let component: TrunkingAddComponent;
  let fixture: ComponentFixture<TrunkingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
