import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingroomplaceComponent } from './livingroomplace.component';

describe('LivingroomplaceComponent', () => {
  let component: LivingroomplaceComponent;
  let fixture: ComponentFixture<LivingroomplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingroomplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingroomplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
