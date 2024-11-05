import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardUsuarioComponent } from './lista-usuarios/card-usuario/card-usuario.component';
import { LoadingComponent } from '../../components/loading/loading.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListaUsuariosComponent,
    UsuarioComponent,
    NavbarComponent,
    FooterComponent,
    CardUsuarioComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  exports:[
    DashboardComponent,
    ListaUsuariosComponent,
    NavbarComponent,
    FooterComponent]
})
export class DashboardModule { }
