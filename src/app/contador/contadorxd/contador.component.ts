import {Component} from '@angular/core'

@Component({
     // para que detecte nuestro componente hay que meterlo en el modulo, para eso lo importamos
     // en el archivo app.module.ts y lo añadimos al decorador que esta ahi
     selector: 'app-contador', //esto es la etiqueta con la que llamaremos a este componente en el html
     template:`
        <h1>{{title}}</h1>

        <h3> La base es <strong> {{base}} </strong></h3>


        <!-- Para definir eventos de angular se usa el tipo de evento entre parentesis-->
        <button (click)="operar(base)"> Sumar {{base}} </button>
        <span> {{number}}</span>
         <button (click)="operar(base * -1)"> Restar {{base}} </button>     
     
     `
})

export class ContadorComponent{
    title :string = 'Titulito xd';
    number: number = 10;
    base: number = 5;

    operar(valor: number){
        this.number += valor;
    }
}