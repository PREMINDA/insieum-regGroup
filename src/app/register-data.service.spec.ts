import { TestBed } from '@angular/core/testing';

import { RegisterDataService } from './register-data.service';

describe('RegisterDataService', () => {
  let service: RegisterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
