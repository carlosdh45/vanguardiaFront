import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMapasComponent } from './pages/listado-mapas/listado-mapas.component';
import { VistaMapaComponent } from './pages/vista-mapa/vista-mapa.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListadoMapasComponent },
      { path: 'agendar-cita/:departamento/:lng/:lat', component: VistaMapaComponent},
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
