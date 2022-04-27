import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  //observable have a call back function, it have a argument "observer" which is injucted by RXJS  
  //observer is nothing but subscriber waiting for data 
  myObservable=new Observable((observer)=>{
    console.log("Observable Starts")
    //emiting the data 
    //it will emits only if there is subscriber to subscribe the data otherwise it won't emit 
  // try{
  //   setTimeout(()=>{
  //     observer.next("1")

  //   },1000)
  //   setTimeout(()=>{
  //     observer.next("2")

  //   },2000)
  //   setTimeout(()=>{
  //     observer.next("3")
  //     observer.error("Error occured")
  //     observer.complete()

  //   },3000)
  //   setTimeout(()=>{
  //     observer.next("4")

  //   },4000)
  // }catch(error){
  //   observer.error(error)

  // }
    observer.next("2")
    observer.next("3")
    observer.complete()
    observer.error("Error occured")
    observer.next("4")
  })

  constructor() { }
//to Use ngOnInit the class should implemet the OnInit interface
  ngOnInit(): void {
    //subscribing the observable
    //subscribe method takes 3 optional parameters these are call back functions 1)next 2)error 3)complete
    //.. means it is a code which is commented
  //..  this.myObservable.subscribe((value)=>{
      //value is the parameter which have the emitted data
      //..console.log(value);
    //..})
this.myObservable.subscribe({
  next: (data) => {console.log(data)},
  complete:()=>console.log("completed"),

  error:(error)=> console.log(error)
})

  }

}
