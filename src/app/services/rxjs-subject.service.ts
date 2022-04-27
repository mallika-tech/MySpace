import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsSubjectService {
  value$=new Subject<string>()
  constructor() { }
  setValue(name:string){
    this.value$.next(name)
  }
}
