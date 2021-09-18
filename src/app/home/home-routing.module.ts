import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { RequisitosComponent } from './pages/requisitos/requisitos.component';

const routes: Routes = [
  {
    path: '',
    children:[
      { path: '', component: HomeComponent },
      { path: 'recomendaciones', component: RecomendacionesComponent},
      { path: 'requisitos', component: RequisitosComponent},
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
