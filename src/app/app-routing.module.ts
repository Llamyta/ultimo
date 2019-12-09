import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { PuntosdonacionComponent } from './components/puntosdonacion/puntosdonacion.component';
import { SolicitardonadoresComponent } from './components/solicitardonadores/solicitardonadores.component';
import { DonacionorganosComponent } from './components/donacionorganos/donacionorganos.component';






const routes: Routes = [
   { path: 'inicio', component: HomeComponent},
   { path: 'requisitos', component: RequisitosComponent},
   { path: 'registrarse', component: RegistrarseComponent},
   { path: 'pntdon', component: PuntosdonacionComponent},
   { path: 'solicitadonadores', component: SolicitardonadoresComponent},
   { path: 'organos', component: DonacionorganosComponent},
   { path: '**', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
