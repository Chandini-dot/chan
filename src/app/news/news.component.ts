// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';


// @Component({
//   selector: 'app-news',
//   templateUrl: './news.component.html',
//   styleUrls: ['./news.component.css']
// })
// export class NewsComponent implements OnInit {
//   public apidata
//  public data1
// ​
//   public ids = []
//   public totalData = []


//   constructor(public router:Router,private http:HttpClientModule) { }

//   ngOnInit() {
    
//     this.http.get('https://jvapi.peelpress.com/news').subscribe(data => {
//       console.log(data)
//       this.apidata = data['news']
//       for (var i = 0; i < this.apidata.length; i++) {
//         this.ids.push(this.apidata[i]._id)
//       }
//       console.log(this.apidata, this.ids)
//     })
//     setTimeout(() => {
// ​
// ​
//       for (var j = 0; j < this.ids.length; j++) {
//         this.http.get('https://jvapi.peelpress.com/news/' + this.ids[j]).subscribe(data1 => {
//           console.log(data1)
//           this.totalData.push(data1['news'])
//           console.log(this.totalData)
//         })
//       }
//     }, 2000);
//   }
//   login(){
//          this.router.navigateByUrl('lognew')
//       }
//   tonextPage(data) {
//     console.log('11', data)
//     localStorage.setItem('newsData', JSON.stringify(data))
//     this.router.navigate(['page'])
//   }
// }
//  // }
// // news(values){
// // this.http.newslist(values).subscribe(data1=>{
// //   console.log("1",data1)
// // })
// // }
// // newsdetails(values){
// //   this.http.newsdetails(values).subscribe(data1=>{
// //     console.log("2",data1)
// //   })
// //   }
// //   login(){
// //     this.router.navigateByUrl('lognew')
// //   }
// //}
