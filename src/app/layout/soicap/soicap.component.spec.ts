import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoicapComponent } from './soicap.component';

describe('SoicapComponent', () => {
  let component: SoicapComponent;
  let fixture: ComponentFixture<SoicapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoicapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoicapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
