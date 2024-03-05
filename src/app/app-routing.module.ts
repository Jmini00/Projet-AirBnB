import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AdministrationComponent } from './administration/administration.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ModifComponent } from './modif/modif.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'detail',
    component:DetailComponent
  },
  {
    path:'administration',
    component:AdministrationComponent
  },
  {
    path:'reservation',
    component:ReservationComponent
  },
  {
    path:'modif',
    component:ModifComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
