import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomPageComponent } from './bathroom-page.component';

describe('BathroomPageComponent', () => {
  let component: BathroomPageComponent;
  let fixture: ComponentFixture<BathroomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathroomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BathroomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
