import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home/home.component';
import { UserComponent } from './components/user/user/user.component';


const routes: Routes = [
  {

    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
