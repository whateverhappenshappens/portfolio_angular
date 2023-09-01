import { TestBed } from '@angular/core/testing';

import { RandomizeLettersService } from './randomize-letters.service';

describe('RandomizeLettersService', () => {
  let service: RandomizeLettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomizeLettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
