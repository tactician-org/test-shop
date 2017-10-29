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
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12


    };
    this.overlays.push(new google.maps.Marker({position:{lat: 36.890257, lng:30.707417 }}))
  }

  

}