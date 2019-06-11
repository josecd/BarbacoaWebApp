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

// Firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';

// Servicios
import { ServicioCargaService } from './servicios/servicio-carga.service';


// HTTP
import {HttpClientModule  } from '@angular/common/http';
import { FirebaseService } from './servicios/firebase.service';


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
    SucursalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [ServicioCargaService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
