import { TestBed } from '@angular/core/testing';

import { Punto5Service } from './punto5.service';

describe('Punto5Service', () => {
  let service: Punto5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Punto5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
