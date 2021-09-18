import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-vista-mapa',
  templateUrl: './vista-mapa.component.html',
  styleUrls: ['./vista-mapa.component.scss']
})
export class VistaMapaComponent implements OnInit {

  myForm: any;

  departamento: string = '';
  lng: string = '';
  lat: string = '';

  lnglat: [number,number] = [0,0];

  constructor( private fb: FormBuilder, private rutaActiva: ActivatedRoute, private router: Router) { }
  



  ngOnInit(): void {
    this.departamento = this.rutaActiva.snapshot.params.departamento;
    this.lng = this.rutaActiva.snapshot.params.lng;
    this.lat = this.rutaActiva.snapshot.params.lat;

    this.lnglat = [ Number(this.lng), Number(this.lat) ];

    this.myForm = this.fb.group({
      nombres: ['',Validators.required],
      apellidos: ['', Validators.required],
      fecha    : ['', Validators.required],
      id :  ['',Validators.required],
      departamento : [this.departamento, Validators.required]
    })

    this.iniciarMapa();
  }

  iniciarMapa(){
    console.log(this.lnglat);
    const mapa = new mapboxgl.Map({
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.lnglat, // starting position [lng, lat]
      zoom: 17 // starting zoom
    });
    new mapboxgl.Marker()
      .setLngLat( this.lnglat )
      .addTo(mapa)
  }

  
}
