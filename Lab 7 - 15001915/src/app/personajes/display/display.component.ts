import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../personajes.service';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent implements OnInit {
  personajeSeleccionado: string | null;

  constructor(private personajeService: PersonajeService) {
    this.personajeSeleccionado = '';
  }

  ngOnInit() {
    this.personajeService.personajeSeleccionado$.subscribe((personaje) => {
      this.personajeSeleccionado = personaje;
    });
  }
}
