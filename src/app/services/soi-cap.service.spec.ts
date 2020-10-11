import { TestBed } from '@angular/core/testing';

import { SoiCapService } from './soi-cap.service';

describe('SoiCapService', () => {
  let service: SoiCapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoiCapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
