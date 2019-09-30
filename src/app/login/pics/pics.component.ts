import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {

  photodata: any;
  constructor() { }
​
  ngOnInit() {
    this.photodata = JSON.parse(localStorage.getItem('photo'));
  }
​
}