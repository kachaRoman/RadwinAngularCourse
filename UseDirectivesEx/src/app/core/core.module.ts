import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyHebrewDirective } from './directives/only-hebrew.directive';

const DECLARATIONS = [OnlyHebrewDirective];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
