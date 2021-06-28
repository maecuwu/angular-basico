import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  frutas : string[] = ['Manzana', 'Pera', 'Platano', 'Kiwi'];
  frutaBorrada :string = '';

  borrarFruta() {
    this.frutaBorrada = this.frutas.shift() || '';
  }
}
