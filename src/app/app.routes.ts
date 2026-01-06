import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Resources} from './resources/resources';
import {Staff} from './staff/staff';
import {Home} from './home/home';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full' },
  { path: 'resources', component: Resources },
  { path: 'staff', component: Staff },
  { path: 'home', component: Home },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}