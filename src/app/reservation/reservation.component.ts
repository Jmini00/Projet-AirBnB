import { Component, Input } from '@angular/core';
import { listBiens } from '../db/list.biens';
import { Router } from '@angular/router';
import { Biens } from '../models/biens';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

    allBiens = listBiens;
    listBiens: any;
    biensSelected: Biens = new Biens();
  
    constructor(private router:Router) {} 

    validerReservation() {
      alert('Votre réservation a bien été prise en compte');
      this.router.navigate(['']);
    }

}
