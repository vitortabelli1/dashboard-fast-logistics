import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-tracking-card',
  templateUrl: './tracking-card.component.html',
  styleUrls: ['./tracking-card.component.css']
})
export class TrackingCardComponent implements OnInit {

  @ViewChild('map', { static: true }) mapContainer!: ElementRef;
  private map!: L.Map;
  public activeTab: string = 'order-details'; // Default active tab

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map(this.mapContainer.nativeElement).setView([-23.5505, -46.6333], 12); // Coordenadas de São Paulo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Adicionando um marcador
    const marker = L.marker([-23.5505, -46.6333]).addTo(this.map);
    marker.bindPopup('<b>Localização Atual em São Paulo!</b>').openPopup();
  }
}
