import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: ()=> import('./home/home.module').then( m => m.HomeModule )
  },
  {
    path: 'centros',
    loadChildren: ()=>import('./maps/maps.module').then( m => m.MapsModule )
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
