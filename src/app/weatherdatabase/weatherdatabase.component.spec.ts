import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdatabaseComponent } from './weatherdatabase.component';

describe('WeatherdatabaseComponent', () => {
  let component: WeatherdatabaseComponent;
  let fixture: ComponentFixture<WeatherdatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherdatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
