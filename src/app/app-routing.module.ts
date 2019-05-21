import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component : HomeComponent},
  {path: 'sobre', component : SobreComponent},
  {path: 'contacto', component : ContactoComponent},
  {path: 'menu', component : MenuComponent},
  {path: 'admin', component : AdministradorComponent},
  {path: 'sucursales', component : SucursalesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
