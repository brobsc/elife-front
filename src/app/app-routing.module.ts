import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthGuard] },
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
