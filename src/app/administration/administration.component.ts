import { Component } from '@angular/core';
import { listBiens } from '../db/list.biens';
import { Biens } from '../models/biens';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent {
  allBiens = listBiens;
  listBiens: any;
  
  biensSelected: Biens = new Biens();
  
  ficheBiens(arg: Biens) {
    this.biensSelected = arg;
  }

  constructor(private router:Router) {}

  viewFiche() {
    this.router.navigate(['detail']);
  
  }

  viewModif() {
    this.router.navigate(['modif']);
  }
}
