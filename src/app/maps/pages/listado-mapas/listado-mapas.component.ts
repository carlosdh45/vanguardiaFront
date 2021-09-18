import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapsService } from '../../../services/maps.service';
import { Departamento } from '../../../interfaces/departamento.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { Centros } from 'src/app/interfaces/centros.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-mapas',
  templateUrl: './listado-mapas.component.html',
  styleUrls: ['./listado-mapas.component.scss']
})
export class ListadoMapasComponent implements OnInit{

  myForm = this.fb.group({
    departamento: ['', [Validators.required]]
  });


  centros: Centros[] = [];
  cargado: boolean = false;

  departamentos!: Departamento[];

  constructor(private mapsService: MapsService, private fb: FormBuilder, private router: Router) { }


  onChange(change: any){
    console.log(change);
  }

  ngOnInit(): void {
    this.getDepartamentos();
    console.log(this.centros);
  
    this.myForm.get('departamento')?.valueChanges.subscribe( id =>{
      this.getCentrosXDepartamento( id );
    });
  }

  getDepartamentos(){
    this.mapsService.getDepartamentos()
        .subscribe( departamentos => {
          this.departamentos = departamentos;
        })
  }

  getCentrosXDepartamento(departamento:string){
    this.mapsService.getCentrosXDepartamentos(departamento)
        .subscribe( (centros:Centros[]) => {
          this.centros = centros;
          this.cargado = true;
        })
  }

}
