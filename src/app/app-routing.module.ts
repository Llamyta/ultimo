import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { PuntosdonacionComponent } from './components/puntosdonacion/puntosdonacion.component';




const routes: Routes = [
   { path: 'inicio', component: HomeComponent},
   { path: 'requisitos', component: RequisitosComponent},
   { path: 'registrarse', component: RegistrarseComponent},
   { path: 'pntdon', component: PuntosdonacionComponent},
   { path: '**', pathMatch: 'full', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
