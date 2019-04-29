import { CanDeactivateService } from './../services/can-deactivate.service';
import { Child2Component } from './../child2/child2.component';
import { Child1Component } from './../child1/child1.component';
import { ParentComponent } from './../parent/parent.component';
import { AuthService } from './../services/auth.service';
import { KefelBoardComponent } from './../kefel-board/kefel-board.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CalcResultComponent } from '../calc-result/calc-result.component';
import { LoginComponent } from '../login/login.component';
import { OnlyUsersComponent } from '../only-users/only-users.component';
import { UsersResolver } from '../services/users-resover';


// canActivateChild

const routes: Route[] = [
  { path: 'login', component: LoginComponent, canDeactivate: [CanDeactivateService] },
  { path: 'home', component: HomeComponent, data: { moreData: 'Resgular home' } },
  { path: 'home2', component: HomeComponent, data: { moreData: 'Home 2' } },
  {
    path: 'parent', component: ParentComponent,
    canDeactivate: [CanDeactivateService],
    children: [
      { path: 'child1', component: Child1Component, canDeactivate: [CanDeactivateService] },
      { path: 'child2', component: Child2Component },
      { path: '', redirectTo: 'child1', pathMatch: 'full' }
    ]
  },
  {
    path: 'users', component: OnlyUsersComponent, canActivate: [AuthService],
    resolve: { users: UsersResolver }
  },
  { path: 'about', component: AboutComponent },
  { path: 'kefel', component: KefelBoardComponent },
  { path: 'result/:xParam/:yParam', component: CalcResultComponent },
  { path: 'admin', loadChildren: './../admin/admin.module#AdminModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
