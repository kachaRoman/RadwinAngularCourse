import { ShowsService, ShowsServiceMock } from './services/shows.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list/show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  {
    provide: ShowsService, useClass: ShowsService
  }
  // ShowsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
