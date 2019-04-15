import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowsModule } from './features/shows/shows.module';
import { HttpClientModule } from '@angular/common/http';
import { ShowsCountComponent } from './components/shows-count/shows-count.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowsCountComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ShowsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
