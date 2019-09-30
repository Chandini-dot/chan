import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { LogComponent } from './log/log.component';
import { LognewComponent } from './lognew/lognew.component';
import { EnterComponent } from './enter/enter.component';
import { MoviesComponent } from './movies/movies.component';
import { CrudComponent } from './crud/crud.component';
// import { AlbumsComponent } from './movies/albums/albums.component';
import { BanksComponent } from './banks/banks.component';
// import { NewsComponent } from './news/news.component';
import { PageComponent } from './news/page/page.component';
import { HomeComponent } from './news/home/home.component';
// import { BankComponent } from './news/bank/bank.component';
import { TodayComponent } from './news/today/today.component';
import { OperationComponent } from './operation/operation.component';
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



  {path:'operation',component:OperationComponent},
  {path:'today',component:TodayComponent},
  {path:'home',component:HomeComponent},
  {path:'page',component:PageComponent},
  // {path:'news',component:NewsComponent},
  {path:'banks',component:BanksComponent},
  // {path:'albums',component:AlbumsComponent},
 {path:'crud',component:CrudComponent},
  {path:'movies',component:MoviesComponent},
  {path:'log',component:LogComponent},
  {path:'enter',component:EnterComponent},
  {path:'lognew',component:LognewComponent},
  {path:'question',component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
