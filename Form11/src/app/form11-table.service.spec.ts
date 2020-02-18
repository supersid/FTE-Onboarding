import { TestBed } from '@angular/core/testing';

import { Form11TableService } from './form11-table.service';

describe('Form11TableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Form11TableService = TestBed.get(Form11TableService);
    expect(service).toBeTruthy();
  });
});
