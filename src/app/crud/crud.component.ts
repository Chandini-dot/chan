import { Component, OnInit } from '@angular/core';
import { ReuseService } from '../reuse.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public value;
constructor(public loc:ReuseService,public http:HttpClient) { }
ngOnInit() {
  }
  create(x){
    const create = x;
    this.http.post("http://localhost:3000/product", create).subscribe(data => {
console.log(data);
    },error=>{
console.log("error",error)
    });
  }
  deleteddd(v){
    this.http.delete('http://localhost:3000/product' + '/' + v).subscribe(data=>{
      console.log("deleted",data) 
    })
  }
  update(forUPdate) {
    this.http.put('http://localhost:3000/product' + '/' + forUPdate.id , forUPdate).subscribe(data => {
      console.log(data);
    });
  }
}