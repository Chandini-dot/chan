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
import { AlbumsComponent } from './movies/albums/albums.component';
import { CrudComponent } from './crud/crud.component';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { BanksComponent } from './banks/banks.component';
// import { NewsComponent } from './news/news.component';
import { PageComponent } from './news/page/page.component';
import { HomeComponent } from './news/home/home.component';
import { BankComponent } from './news/bank/bank.component';
import { TodayComponent } from './news/today/today.component';
import { OperationComponent } from './operation/operation.component'
 
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    LogComponent,
    LognewComponent,
    EnterComponent,
    MoviesComponent,
    AlbumsComponent,
    CrudComponent,
    BanksComponent,
    // NewsComponent,
    PageComponent,
    HomeComponent,
    BankComponent,
    TodayComponent,
    OperationComponent,
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
