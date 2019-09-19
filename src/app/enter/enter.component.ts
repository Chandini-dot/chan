import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {
arr=[];
  constructor(public router:Router) { }

  ngOnInit() {
  }
fun(val){
this.arr.push(val)
console.log(this.arr)
}
del(i){
  this.arr.splice(i,1)
}
new(){
  this.router.navigateByUrl('log')
}
}
