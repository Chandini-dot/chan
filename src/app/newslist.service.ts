import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewslistService {
  get(arg0: string) {
    throw new Error("Method not implemented.");
  }
  listAPI=" https://jvapi.peelpress.com/news";
  detailsAPI=" https://jvapi.peelpress.com/news/:_id";

  constructor( public http: HttpClient ) { }
  newslist(values){
    return this.http.get('https://jvapi.peelpress.com/news').map(data =>{
      return data;
    })
  ​}
  newsdetails(values){
    return this.http.get(' https://jvapi.peelpress.com/news/:_id').map(data1 =>{
      console.log("2",data1)
    })
  ​} 
  }