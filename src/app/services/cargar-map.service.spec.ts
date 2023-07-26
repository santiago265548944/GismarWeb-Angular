import { TestBed } from '@angular/core/testing';

import { CargarMapService } from './cargar-map.service';

describe('CargarMapService', () => {
  let service: CargarMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
