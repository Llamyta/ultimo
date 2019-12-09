import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DonacionorganosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
