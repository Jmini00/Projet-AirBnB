import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AdministrationComponent } from './administration/administration.component';
import { HeaderComponent } from './header/header.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ModifComponent } from './modif/modif.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    AdministrationComponent,
    HeaderComponent,
    ReservationComponent,
    ModifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
