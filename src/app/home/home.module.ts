import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RequisitosComponent } from './pages/requisitos/requisitos.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';


@NgModule({
  declarations: [
    HomeComponent,
    RequisitosComponent,
    RecomendacionesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
