import { Component } from '@angular/core';
import { PersonajeService } from '../personajes.service';

@Component({
  selector: 'app-seleccionador',
  standalone: true,
  imports: [],
  templateUrl: './seleccionador.component.html',
  styleUrl: './seleccionador.component.css',
})
export class SeleccionadorComponent {
  personajeSeleccionado: string;
  personajes = ['goku', 'vegeta', 'gohan', 'piccolo', 'krillin'];

  constructor(private personajeService: PersonajeService) {
    this.personajeSeleccionado =
      personajeService.obtenerPersonajeSeleccionado() || 'goku';
  }

  seleccionarPersonaje(personaje: string) {
    this.personajeSeleccionado = personaje;
    this.personajeService.seleccionarPersonaje(personaje);
  }
}
