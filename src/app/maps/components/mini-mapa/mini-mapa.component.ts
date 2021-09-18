import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.scss']
})
export class MiniMapaComponent implements AfterViewInit {
  
  @Input() lat: string = '';
  @Input() lng: string = '';

  lnglat: [number, number] = [0,0];

  @ViewChild('mapa') divMapa!: ElementRef;

  ngAfterViewInit(): void {

    this.lnglat = [ Number(this.lng), Number(this.lat) ];
    console.log(this.lnglat);

    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.lnglat, // starting position [lng, lat]
      zoom: 15 ,// starting zoom
      interactive: false
    });

    new mapboxgl.Marker()
      .setLngLat( this.lnglat )
      .addTo(mapa)
  }


}
