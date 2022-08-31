import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // se escribe la etiqueta en el main.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 1';
  edadUno = "";
  edadDos = "";
  suma = 0;
  promedio = 0;

  sumar() {
    this.suma = parseInt(this.edadUno) + parseInt(this.edadDos);
  }
  promediar() {
    this.promedio = this.suma / 2;
  }
  limpiar() {
    this.edadDos = "";
    this.edadUno = "";
    this.suma = 0;
    this.promedio = 0;
  }
}
