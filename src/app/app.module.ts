import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesRoutingModule } from './clientes/clientes-routing.module';

import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';
import { NovaContaComponent } from './clientes/nova-conta/nova-conta.component';
import { LoginComponentComponent } from './clientes/login/login-component.component';
import { MeusDispositivosComponent } from './clientes/meus-dispositivos/meus-dispositivos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MeusDispositivosComponent,
    NovaContaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ClientesRoutingModule,
    MaterializeButtonModule,
    MaterializeCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
