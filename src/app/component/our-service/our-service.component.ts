import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {
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