import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminRootComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminRootComponent }
    ])
  ]
})
export class AdminModule { }

