import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  opt1=["John Joseph","Vanaja N. Sarna","Mahender Singh"," S Ramesh"]
  opt2=["Chennai","Delhi","Nagpur","Kolkata"]
  opt3=["India","Sri Lanka","Kenya","Argentina"]
  opt4=["Indian Opinion","Harijan","Indian Speaker","India News"]
  opt5=["Baba Amte", "Mother Teresa","Anna Hazare","None of these"]
  len=0;
  array=[];
  sum=5;
  rem=0;
    constructor() { }
  ​
    ngOnInit() {
    }
  submit(){
    alert("Total number of questions is 5 \n "+"Attended number of questions are"+this.len+"\n" +"Remaining number of questions is"+this.rem+"\n");
   }
   validate(value){
     console.log(value);
     this.array.push(value);
     this.len=this.array.length;
     this.rem=this.sum-this.len;
   }
  ​
  ​
  }
  