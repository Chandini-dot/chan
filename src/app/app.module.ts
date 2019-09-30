import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{Ng2SearchPipeModule} from 'ng2-search-filter';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './login/task/task.component';
import { PostComponent } from './login/post/post.component';
import { CreateComponent } from './login/create/create.component';
import { PhotoComponent } from './login/photo/photo.component';
import { PicsComponent } from './login/pics/pics.component';
import { MalbumComponent } from './login/malbum/malbum.component'
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent,
    
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
