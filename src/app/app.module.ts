import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    AdministradorComponent,
    ContactoComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
