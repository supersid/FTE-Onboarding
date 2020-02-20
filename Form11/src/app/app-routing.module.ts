import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { UserForm11Component } from '../app/user-form11/user-form11.component';

const routes: Routes = [
  {path:"pf",component:UserForm11Component},
  {path: 'pf-pdf',component: ContainerComponent}
  // {path: 'pf',component:UserForm11Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
