import { CadastroTiposComponent } from './cadastro-tipos/cadastro-tipos.component';
import { TodosDispositivosComponent } from './todos-dispositivos/todos-dispositivos.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponentComponent } from "./login/login-component.component";
import { MeusDispositivosComponent } from "./meus-dispositivos/meus-dispositivos.component";
import { AuthGuardService } from "../shared/service/auth-guard.service";


const routes: Routes = [
    {
        path: 'todos-dispositivos',
        component: TodosDispositivosComponent, canActivate: [AuthGuardService]
    },    
    {
        path: 'meusDispositivos',
        component: MeusDispositivosComponent, canActivate: [AuthGuardService]
    }, {
        path: 'login',
        component: LoginComponentComponent, canActivate: [AuthGuardService]
    }, {
        path: 'cadastro-tipos',
        component: CadastroTiposComponent, canActivate: [AuthGuardService]
    },{
        path: '**',
        redirectTo: 'login', pathMatch: 'full',
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }