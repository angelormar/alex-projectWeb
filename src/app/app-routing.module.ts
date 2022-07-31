import { MeusDispositivosComponent } from './clientes/meus-dispositivos/meus-dispositivos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // {path: 'login', component: LoginComponentComponent},
 // {path: '', component: DispositivosComponent},
 
  {
  path: '',
  loadChildren: ()=> import('./clientes/clientes-routing.module').then(m=> m.ClientesRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
