import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { GradosFormData } from './formulario/formulario.component';

type Grados = {
  id: number;
  c: number;
  f: number;
};

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css',
})
export class ConversorComponent {
  arregloGrados: Grados[] = [];

  constructor() {}

  convertir(data: GradosFormData) {
    if (data.tipoGrados === 'C') {
      this.arregloGrados.push({
        c: data.grados,
        f: (data.grados * 9) / 5 + 32,
        id: data.id,
      });
    } else {
      this.arregloGrados.push({
        c: ((data.grados - 32) * 5) / 9,
        f: data.grados,
        id: data.id,
      });
    }
  }

  borrar(id: number) {
    this.arregloGrados = this.arregloGrados.filter((item) => item.id !== id);
  }
}
