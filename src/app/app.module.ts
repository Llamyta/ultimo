import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { PuntosdonacionComponent } from './components/puntosdonacion/puntosdonacion.component';
import { CampaniasdonacionComponent } from './components/campaniasdonacion/campaniasdonacion.component';
import { SolicitardonadoresComponent } from './components/solicitardonadores/solicitardonadores.component';
import { DonacionorganosComponent } from './components/donacionorganos/donacionorganos.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from "@angular/fire/storage";
import { RegistroGoogleComponent } from './components/registro-google/registro-google.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    RequisitosComponent,
    RegistrarseComponent,
    PuntosdonacionComponent,
    CampaniasdonacionComponent,
    SolicitardonadoresComponent,
    DonacionorganosComponent,
    UsuarioComponent,
    RegistroGoogleComponent,
    HospitalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFontAwesomeModule
  ],
providers: [AngularFireAuth,AngularFirestore, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
