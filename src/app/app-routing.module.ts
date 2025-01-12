import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTripComponent } from './comps/all-trip/all-trip.component';
import { RegisterComponent } from './comps/register/register.component';
import { LoginComponent } from './comps/login/login.component';
import { NavComponent } from './comps/nav/nav.component';
import { DetailsComponent } from './comps/details/details.component';
import { HomeComponent } from './comps/home/home.component';
import { MyPersonalComponent } from './comps/my-personal/my-personal.component';
import { AllUserComponent } from './comps/all-user/all-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'AllTrip', component: AllTripComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Nav', component: NavComponent },
  { path: 'Details/:i', component: DetailsComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'MyPersonal', component: MyPersonalComponent },
  { path: 'AllUser', component: AllUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
