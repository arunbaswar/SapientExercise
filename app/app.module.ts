import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramsListComponent } from './programs/program-list.component';
import { DataService } from './services/data.service';
import { ProgramListService } from './services/program-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgramsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    ProgramListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
