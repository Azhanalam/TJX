import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrunkingListComponent } from './trunking-list.component';

describe('TrunkingListComponent', () => {
  let component: TrunkingListComponent;
  let fixture: ComponentFixture<TrunkingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrunkingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrunkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
