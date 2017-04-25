import { TestBed, inject } from '@angular/core/testing';

import { ContactLocalstorageService } from './contact-localstorage.service';

describe('ContactLocalstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactLocalstorageService]
    });
  });

  it('should ...', inject([ContactLocalstorageService], (service: ContactLocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
