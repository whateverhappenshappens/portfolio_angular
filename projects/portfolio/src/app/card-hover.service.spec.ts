import { TestBed } from '@angular/core/testing';

import { CardHoverService } from './card-hover.service';

describe('CardHoverService', () => {
  let service: CardHoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardHoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
