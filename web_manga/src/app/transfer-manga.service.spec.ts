import { TestBed } from '@angular/core/testing';

import { TransferMangaService } from './transfer-manga.service';

describe('TransferMangaService', () => {
  let service: TransferMangaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferMangaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
