import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  operation:FormGroup;
  data1: Object;
  public removeid=""
  crud: any;
  public id
public name
public lname
  constructor(private http:HttpClient) { 
    this.operation = new FormGroup({
      id: new FormControl(),
      title:new FormControl(),
      author:new FormControl
   });
  
  }
    ngOnInit() {
  }
add(a){
  let data={
    id:a.value.id,
    title:a.value.title,
     author:a.value.author
}
this.http.post("http://localhost:3000/posts",data).subscribe(data=>{
console.log(data)
})
}
view(){
  this.http.get("http://localhost:3000/posts").subscribe(data2=>
  {
    console.log(data2)
    this.data1=data2
  })
}
remove(){
  this.http.delete("http://localhost:3000/posts"+"/"+this.removeid).subscribe(data3=>
  {
    console.log("successfully deleted")
    this.view();
  })
}
update(v){
  this.crud=v
 console.log(this.crud)
 this.id=this.crud.id;
 this.name=this.crud.title;
 this.lname=this.crud.author;
 console.log(this.id)
 }
}