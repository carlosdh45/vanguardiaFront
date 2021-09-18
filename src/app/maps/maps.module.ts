import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { ListadoMapasComponent } from './pages/listado-mapas/listado-mapas.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { VistaMapaComponent } from './pages/vista-mapa/vista-mapa.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListadoMapasComponent,
    MiniMapaComponent,
    VistaMapaComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class MapsModule { }
