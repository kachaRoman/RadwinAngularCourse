import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './pipes/test.pipe';

@NgModule({
  declarations: [TestPipe],
  exports: [TestPipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
