import { Component } from '@angular/core';
import { listBiens } from '../db/list.biens';
import { Biens } from '../models/biens';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
allBiens = listBiens;
listBiens: any;

biensSelected: Biens = new Biens();

ficheBiens(arg: Biens) {
  this.biensSelected = arg;
}

constructor(private router:Router) {} // constructor va chercher une boite a outils dans node nodules et donner pouvoirs a variable activeRoute

viewFiche() {
  this.router.navigate(['detail']);

}

reserver() {
  this.router.navigate(['reservation']);
}

searchFilter(value: string) {
  this.allBiens = listBiens; // reinitialisation
  this.allBiens = this.allBiens.filter(Biens => {  // filter permet de filtrer dans le tableau allPokemons / pokemon=1 objet à chaque boucle
    return Biens.type.toLowerCase().includes(value.toLowerCase());
    // return les pokemons dont le nom contient la valeur de l'input en minuscule
  })
  if(this.allBiens.length === 0) {
    this.info('Aucun résultat','Aucun bien ne correspond à votre recherche');
  }
}

info(title:string, mess:string) {
    Swal.fire({
    title: title,
    text: mess,
    icon: 'info',
    width: 600,
    timer: 3000,
    padding: '3em',
    backdrop: false,
    showConfirmButton: false,
  })
}


}
