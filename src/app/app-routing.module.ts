import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration/registration.component';

const routes: Routes = [
  {path:'', component:RegistrationComponent},
  {path:'',
    loadChildren:()=>import('./registration/registration/registration.module').then(m=>m.RegistrationModule)
},
{path:'dashboard', component:DashboardComponent},
  {path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard/dashboard.module').then(m=>m.DashboardModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
