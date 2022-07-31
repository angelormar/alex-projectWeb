import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesRoutingModule } from './clientes/clientes-routing.module';

import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';
import { LoginComponentComponent } from './clientes/login/login-component.component';
import { MeusDispositivosComponent } from './clientes/meus-dispositivos/meus-dispositivos.component';
import { ErrorhandlerService } from './shared/service/errorhandler.service';
import { TodosDispositivosComponent } from './clientes/todos-dispositivos/todos-dispositivos.component';
import { JwtinterceptorService } from './shared/service/jwtinterceptor.service';
import { CadastroTiposComponent } from './clientes/cadastro-tipos/cadastro-tipos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MeusDispositivosComponent,
    TodosDispositivosComponent,
    CadastroTiposComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ClientesRoutingModule,
    MaterializeButtonModule,
    MaterializeCardModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorService, multi: true},
    { provide: ErrorHandler , useClass: ErrorhandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
