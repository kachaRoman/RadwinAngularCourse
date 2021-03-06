import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsRootComponent } from './components/shows-root/shows-root.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowEditComponent } from './show-edit/show-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowsRootComponent, ShowsListComponent, ShowEditComponent],
  exports: [ShowsRootComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShowsModule { }
