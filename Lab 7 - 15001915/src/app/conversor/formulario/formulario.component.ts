import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type GradosFormData = {
  grados: number;
  tipoGrados: string;
  id: number;
};

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  grados: number;
  tipoGrados: string;

  @Output() enviarData = new EventEmitter<GradosFormData>();

  constructor() {
    this.grados = 0;
    this.tipoGrados = 'C';
  }

  enviar() {
    this.enviarData.emit({
      grados: this.grados,
      tipoGrados: this.tipoGrados,
      id: Math.random(),
    });
  }
}
