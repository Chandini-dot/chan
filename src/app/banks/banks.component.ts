import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  title = 'rg';
  bankname="";
  search='';
aa:boolean=false;
users=[{
  Action:'1',
  bankname:' Bharat Cooperative bank Mumbai Limited',
  IFSC:'BCBM00077',
Bankid:'68',
Branch:'Koramangala'
},{
  Action:'1',
  bankname:' Bharat Cooperative bank Mumbai Limited',
  IFSC:'BCBM00077',
Bankid:'68',
Branch:'Magadi Main Road'
},{
  Action:'1',
  bankname:' City Union bank Limited',
  IFSC:'CIUB00054',
Bankid:'44',
Branch:'Bnaglore sultanpet'
},{
  Action:'1',
  bankname:' City Union bank Limited',
  IFSC:'CIUB000109',
Bankid:'44',
Branch:'Koramangal Bangalore'
},
{
  naAction:'1',
  bankname:' City Union bank Limited',
  IFSC:'CIUB000132',
Bankid:'44',
Branch:'Malleshwaram'
},
{
  Action:'1',
  bankname:' City Union bank Limited',
  IFSC:'CIUB000139',
Bankid:'44',
Branch:'Indira nagar'
},
{
  Action:'1',
  bankname:' City Union bank Limited',
  IFSC:'CIUB000148',
Bankid:'44',
Branch:'Jaya nagar banglore'
},
{
  Action:'1',
  bankname:' City Union bank Limited',
  IFSC:'CIUB000188',
Bankid:'44',
Branch:'Rajaji Nagar banglore'
}]
constructor() { }
ngOnInit() {
}}
