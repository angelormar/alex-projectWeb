import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AlertOutFocusDirective } from './shared/alert-out-focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    DispositivosComponent,
    LoginComponentComponent,
    AlertOutFocusDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterializeButtonModule,
    MaterializeCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
