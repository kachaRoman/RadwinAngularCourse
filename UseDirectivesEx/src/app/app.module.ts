import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
