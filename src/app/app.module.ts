import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { RegistroGoogleComponent } from './components/registro-google/registro-google.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { RegistroorganosComponent } from './components/registroorganos/registroorganos.component';
import { FiltraSangrePipe } from './pipes/filtra-sangre.pipe';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { AprobarcitasComponent } from './componets/aprobarcitas/aprobarcitas.component';

 // Fullcalendar
import {FullCalendarModule} from '@fullcalendar/angular';
import { ListadeesperaComponent } from './components/listadeespera/listadeespera.component';
import {HttpClientModule} from '@angular/common/http';
import { MapaComponent } from './components/hospitales/mapa/mapa.component';

// Mapa
import { AgmCoreModule } from '@agm/core';


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
    HospitalesComponent,
    RegistroorganosComponent,
    FiltraSangrePipe,
    DonacionesComponent,
    AprobarcitasComponent,
    ListadeesperaComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFontAwesomeModule,
    FullCalendarModule,
    HttpClientModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPc2a1KGTDaXosDJjtAJAn6yH5A2aKUG0'
    })
  ],
providers: [AngularFireAuth, AngularFirestore, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
