import { Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';
import { PersonajesComponent } from './personajes/personajes.component';

export const routes: Routes = [
  {
    path: 'conversor',
    component: ConversorComponent,
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: '',
    redirectTo: '/conversor',
    pathMatch: 'full',
  },
];
