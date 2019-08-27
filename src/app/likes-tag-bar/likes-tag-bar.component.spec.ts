import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesTagBarComponent } from './likes-tag-bar.component';

describe('LikesTagBarComponent', () => {
  let component: LikesTagBarComponent;
  let fixture: ComponentFixture<LikesTagBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesTagBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesTagBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
