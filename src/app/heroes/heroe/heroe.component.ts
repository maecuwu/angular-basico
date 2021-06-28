import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Spiderman';

    edad: number = 30;

    obtenerNombre() :string{
        return `${this.nombre} tiene ${this.edad} años`;
    }

    get nombreMayus() :string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre() :void{
        this.nombre = 'Iron Man';
    }
    cambiarEdad() :void {
        this.edad = 20;
    }

}