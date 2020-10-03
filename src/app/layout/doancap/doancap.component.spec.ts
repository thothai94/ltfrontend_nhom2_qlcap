import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoancapComponent } from './doancap.component';

describe('DoancapComponent', () => {
  let component: DoancapComponent;
  let fixture: ComponentFixture<DoancapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoancapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoancapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
