import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitan America"];
  heroeBorrado: string = "";
  
  borrarHeroe(){
    //this.heroes[2] = "";
    //this.heroes.splice(2);
    //this.heroes =[];
   this.heroeBorrado = this.heroes.shift() || "";



  }
}
