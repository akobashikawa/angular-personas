import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HolamundoComponent } from './holamundo/holamundo.component';
import { HolaComponent } from './hola/hola.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  { path: 'holamundo', component: HolamundoComponent },
  { path: 'hola', component: HolaComponent },
  { path: 'personas', component: PersonasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
