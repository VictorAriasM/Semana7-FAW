import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  private personajeSource = new BehaviorSubject<string | null>(null);
  personajeSeleccionado$ = this.personajeSource.asObservable();

  constructor() {}

  seleccionarPersonaje(imagenUrl: string) {
    this.personajeSource.next(imagenUrl);
  }

  obtenerPersonajeSeleccionado() {
    return this.personajeSource.getValue();
  }
}
