import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesMonthLineComponent } from './images-month-line.component';

describe('ImagesMonthLineComponent', () => {
  let component: ImagesMonthLineComponent;
  let fixture: ComponentFixture<ImagesMonthLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesMonthLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesMonthLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
