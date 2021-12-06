import { LoginComponentComponent } from './login-component/login-component.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponentComponent},
  {path: '', component: DispositivosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
