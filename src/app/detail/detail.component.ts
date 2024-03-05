import { Component, OnInit } from '@angular/core';
import { listBiens } from '../db/list.biens';
import { Biens } from '../models/biens';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  allBiens = listBiens;
  listBiens: any;
  biensSelected: Biens = new Biens();

  constructor(private activeRoute: ActivatedRoute,private router:Router) {} // constructor va chercher une boite a outils dans node nodules et donner pouvoirs a variable activeRoute

  ngOnInit(): void { // action avant le chargement de la page
    let idUrl: number | any = this.activeRoute.snapshot.paramMap.get('id'); 
    for(let i=0;i<this.listBiens.length;i++) {
      if(this.listBiens[i].id == idUrl) {
        this.biensSelected = this.listBiens[i];
      }
    }
}
}
