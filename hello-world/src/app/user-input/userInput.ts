import { Component } from '@angular/core';

@Component({
    selector: 'app-userInput',
    templateUrl: './userInput.html'
})
export class userInputComponent{
  username="";
  myname="";
  userarray=["T","T"];
  testingEventBinding = "";
  setEventBinding(event: Event){
    this.testingEventBinding = (<HTMLInputElement>event.target).value + "Hello"; 
  }
  constructor(){
    this.myname = Math.random() > 0.5 ? "Ismail":"Ismael";
  }
  getStyle(){
    return this.myname==='Ismail'?"red":"green";
  }
  resetUsername(){
    this.userarray.push(this.username);
    console.log(this.userarray);
  }
}