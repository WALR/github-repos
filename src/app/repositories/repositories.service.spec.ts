/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RepositoriesService } from './repositories.service';

describe('RepositoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoriesService]
    });
  });

  it('should ...', inject([RepositoriesService], (service: RepositoriesService) => {
    expect(service).toBeTruthy();
  }));
});
