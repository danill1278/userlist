import { TestBed } from '@angular/core/testing';

import { UserCardResolverService } from './user-detailed-resolver.service';

describe('UserCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCardResolverService = TestBed.get(UserCardResolverService);
    expect(service).toBeTruthy();
  });
});
