import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuyencapComponent } from './tuyencap.component';

describe('TuyencapComponent', () => {
  let component: TuyencapComponent;
  let fixture: ComponentFixture<TuyencapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuyencapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuyencapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
