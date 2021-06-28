import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  // aqui van componentes
  declarations: [
    AppComponent
  ],
  // aqui van modulos
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], //aqui van los servicios
  bootstrap: [AppComponent] //aqui va el componente principal
})
export class AppModule { }
