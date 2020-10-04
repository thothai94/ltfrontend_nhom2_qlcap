import { TestBed } from '@angular/core/testing';

import { TuyenCapService } from './tuyen-cap.service';

describe('TuyenCapService', () => {
  let service: TuyenCapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuyenCapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
