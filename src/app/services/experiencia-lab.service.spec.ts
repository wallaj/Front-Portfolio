import { TestBed } from '@angular/core/testing';

import { ExperienciaLabService } from './experiencia-lab.service';

describe('ExperienciaLabService', () => {
  let service: ExperienciaLabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienciaLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
