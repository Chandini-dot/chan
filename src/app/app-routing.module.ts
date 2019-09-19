import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { LogComponent } from './log/log.component';
import { LognewComponent } from './lognew/lognew.component';
import { EnterComponent } from './enter/enter.component';
import { MoviesComponent } from './movies/movies.component';
import { CrudComponent } from './crud/crud.component';
import { AlbumsComponent } from './movies/albums/albums.component';
import { BanksComponent } from './banks/banks.component';
// import { NewsComponent } from './news/news.component';
import { PageComponent } from './news/page/page.component';
import { HomeComponent } from './news/home/home.component';
// import { BankComponent } from './news/bank/bank.component';
import { TodayComponent } from './news/today/today.component';
import { OperationComponent } from './operation/operation.component';

const routes: Routes = [
  {path:'operation',component:OperationComponent},
  {path:'today',component:TodayComponent},
  {path:'home',component:HomeComponent},
  {path:'page',component:PageComponent},
  // {path:'news',component:NewsComponent},
  {path:'banks',component:BanksComponent},
  {path:'albums',component:AlbumsComponent},
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
