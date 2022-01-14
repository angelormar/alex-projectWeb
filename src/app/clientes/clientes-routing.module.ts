import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NovaContaComponent } from "./nova-conta/nova-conta.component";
import { LoginComponentComponent } from "./login/login-component.component";
import { MeusDispositivosComponent } from "./meus-dispositivos/meus-dispositivos.component";


const routes: Routes = [
    {
        path: 'meusDispositivos',
        component: MeusDispositivosComponent
    },
    {
        path:'novaConta',
        component: NovaContaComponent
    },
    {
        path:'login',
        component: LoginComponentComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }