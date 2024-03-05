import { Component, OnInit } from '@angular/core';
import { listBiens } from '../db/list.biens';
import { ActivatedRoute, Router } from '@angular/router';
import { Biens } from '../models/biens';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  allBiens = listBiens;
  listBiens: any;
  biensSelected: Biens | any = new Biens();
  
  ficheBiens(arg: Biens) {
    this.biensSelected = arg;
  }
  
  constructor(private activeRoute: ActivatedRoute,private router:Router) {} // constructor va chercher une boite a outils dans node nodules et donner pouvoirs a variable activeRoute

  
  updateBiens() {
    alert('Modifications enregistrées');
    this.router.navigate(['']);
  }
  ngOnInit(): void { // action avant le chargement de la page
    let idUrl: number | any = this.activeRoute.snapshot.paramMap.get('id'); 
    for(let i=0;i<this.listBiens.length;i++) {
      if(this.listBiens[i].id == idUrl) {
        this.biensSelected = this.listBiens[i];
      }
    }
  }
}
