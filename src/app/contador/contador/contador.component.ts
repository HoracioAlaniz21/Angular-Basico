import {Component} from "@angular/core";


@Component({
    selector: "app-contador",
    template: `<h1>Hola Mundo</h1>
    <h2>{{ titulo }}</h2>
    <h3>La suma de 2 mas 2 es igual  a: {{ 2 + 2 }}</h3>
    
    <button (click)="acumular(2)"> + 1</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-2)"> - 1</button>
    <br>
    <br>
    <br>
    <h4>La base es <strong> {{ base }}</strong></h4>
    
    <button (click)="acumular(base)"> + {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)"> - {{ base }}</button>`,
})
export class contadorCompnent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    sumar(){
      this.numero +=1;
    }
  
    restar(){
      this.numero -=1;
    }
  
    acumular(valor: number){
      this.numero += valor;
    }
}