import { TestBed } from '@angular/core/testing';

import { RxjsSubjectService } from './rxjs-subject.service';

describe('RxjsSubjectService', () => {
  let service: RxjsSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
