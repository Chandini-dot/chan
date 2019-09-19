import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
public datat
constructor(private router:Router) { }
ngOnInit() {
this.datat=JSON.parse(localStorage.getItem('newsData'))
console.log(this.datat)
}
}