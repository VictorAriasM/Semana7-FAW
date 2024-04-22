import { Component } from '@angular/core';
import { DisplayComponent } from './display/display.component';
import { SeleccionadorComponent } from './seleccionador/seleccionador.component';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [DisplayComponent, SeleccionadorComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
})
export class PersonajesComponent {}
