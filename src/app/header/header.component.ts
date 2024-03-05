import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: Router) { }


  pageAdmin() {
    let result = prompt('Accés réservé : veuillez entrer le mot de passe');
    if(result === 'jerome') {
    this.route.navigate(['/administration'])
    }
    else if (result != 'jerome') {
      alert("Autorisation refusée");
    }
  }
}
