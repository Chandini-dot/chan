import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoComponent } from './login/photo/photo.component';
import { TaskComponent } from './login/task/task.component';
import { CreateComponent } from './login/create/create.component';
import { PostComponent } from './login/post/post.component';
import { PicsComponent } from './login/pics/pics.component';
import { MalbumComponent } from './login/malbum/malbum.component';

const routes: Routes = [
  {path:'photo',component:PhotoComponent},
  {path:'task',component:TaskComponent},
  {path:'create',component:CreateComponent},
  {path:'malbum',component:MalbumComponent},
  {path:'post',component:PostComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'pics',component:PicsComponent},



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
