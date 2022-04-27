import { Component, OnInit } from '@angular/core';
import { RxjsSubjectService } from 'src/app/services/rxjs-subject.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  rxjsName:string=''
   item="Raja"
  constructor(private rxjsService:RxjsSubjectService) { }
surnames:string[]=[]
  ngOnInit(): void {
    
  }
addName(nam:string){
  this.surnames.push(nam)
  if(this.surnames.length===2){
    this.rxjsService.setValue(this.surnames[0])

  }
}
}
