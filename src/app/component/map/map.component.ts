import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  overlays: any[] = [];

  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      center: { lat: 13.7463783, lng: 100.5348459 },
      zoom: 18

    };
    this.overlays.push(new google.maps.Marker({position:{lat: 13.7463783, lng:100.5348459 }}))
  }

  

}