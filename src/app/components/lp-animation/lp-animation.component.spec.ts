import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpAnimationComponent } from './lp-animation.component';

describe('LpAnimationComponent', () => {
  let component: LpAnimationComponent;
  let fixture: ComponentFixture<LpAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
