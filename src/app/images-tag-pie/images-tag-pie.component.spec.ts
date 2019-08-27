import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesTagPieComponent } from './images-tag-pie.component';

describe('ImagesTagPieComponent', () => {
  let component: ImagesTagPieComponent;
  let fixture: ComponentFixture<ImagesTagPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesTagPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesTagPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
