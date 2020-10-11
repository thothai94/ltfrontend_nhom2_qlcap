import { TestBed } from '@angular/core/testing';

import { DoanCapService } from './doan-cap.service';

describe('DoanCapService', () => {
  let service: DoanCapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoanCapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
