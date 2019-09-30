import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { LogComponent } from './log/log.component';
import { LognewComponent } from './lognew/lognew.component';
import { EnterComponent } from './enter/enter.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
// import { AlbumsComponent } from './movies/albums/albums.component';
import { CrudComponent } from './crud/crud.component';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { BanksComponent } from './banks/banks.component';
// import { NewsComponent } from './news/news.component';
import { PageComponent } from './news/page/page.component';
import { HomeComponent } from './news/home/home.component';
import { BankComponent } from './news/bank/bank.component';
import { TodayComponent } from './news/today/today.component';
import { OperationComponent } from './operation/operation.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './login/task/task.component';
import { PostComponent } from './login/post/post.component';
import { CreateComponent } from './login/create/create.component';
import { PhotoComponent } from './login/photo/photo.component';
import { PicsComponent } from './login/pics/pics.component';
import { MalbumComponent } from './login/malbum/malbum.component'
 
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    LogComponent,
    LognewComponent,
    EnterComponent,
    MoviesComponent,
    // AlbumsComponent,
    CrudComponent,
    BanksComponent,
    // NewsComponent,
    PageComponent,
    HomeComponent,
    BankComponent,
    TodayComponent,
    OperationComponent,
    LoginComponent,
    DashboardComponent,
    TaskComponent,
    PostComponent,
    CreateComponent,
    
    PhotoComponent,
    PicsComponent,
    MalbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
