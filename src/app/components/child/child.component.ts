import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { RxjsSubjectService } from 'src/app/services/rxjs-subject.service';
import { ObservableComponent } from '../observable/observable.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //rxjs subject
   rName=''
   //parent to child=>>>  see the parent HTML the value for parentMessage comming from there 
  @Input() parentMessage=""
  constructor(private rxJsService:RxjsSubjectService) {
    //rxjs subject
    rxJsService.value$.subscribe(data=>{
      this.rName=data
    })
    
   }
  //this is for child to parent interaction
  @Output() eventEmit= new EventEmitter<string>();


  ngOnInit(): void {
    console.log(this.parentMessage)
    
  }
// child to parent interaction method
  sendName(value:string){
    this.eventEmit.emit(value)
  }
  

}
