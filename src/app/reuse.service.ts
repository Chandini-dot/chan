import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReuseService {
  value: any;


  constructor(public http:HttpClient) { 
    
  }
  retrive(){
      this.http.get("http://localhost:3000/product").subscribe(a=> {
        this.value = a;
        console.log(a);
        });
    }
}
