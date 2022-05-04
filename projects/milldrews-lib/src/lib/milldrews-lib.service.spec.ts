import { TestBed } from '@angular/core/testing';

import { MilldrewsLibService } from './milldrews-lib.service';

describe('MilldrewsLibService', () => {
  let service: MilldrewsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilldrewsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
