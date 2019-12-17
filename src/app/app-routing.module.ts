import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { CampaniasdonacionComponent } from './components/campaniasdonacion/campaniasdonacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { PuntosdonacionComponent } from './components/puntosdonacion/puntosdonacion.component';
import { SolicitardonadoresComponent } from './components/solicitardonadores/solicitardonadores.component';
import { DonacionorganosComponent } from './components/donacionorganos/donacionorganos.component';
import { RegistroGoogleComponent } from './components/registro-google/registro-google.component';
import { RegistroorganosComponent } from './components/registroorganos/registroorganos.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { AprobarcitasComponent } from './componets/aprobarcitas/aprobarcitas.component';




const routes: Routes = [
   { path: 'inicio', component: HomeComponent},
   { path: 'google', component: RegistroGoogleComponent},
   { path: 'requisitos', component: RequisitosComponent},
   { path: 'registrarse', component: RegistrarseComponent},
   { path: 'pntdon', component: PuntosdonacionComponent},
   { path: 'solicitadonadores', component: SolicitardonadoresComponent},
   { path: 'organos', component: DonacionorganosComponent},
   { path: 'usuarios', component: UsuarioComponent},
   { path: 'donaciones', component: DonacionesComponent},
   { path: 'aprobar', component: AprobarcitasComponent},
   { path: 'campaniaDonacion', component: CampaniasdonacionComponent},
   { path: 'regorganos', component: RegistroorganosComponent},
   { path: 'hospitales', component: HospitalesComponent},
   { path: '**', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
