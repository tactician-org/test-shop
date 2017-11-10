import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {
  
  items: any[] = ["https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/sewing.jpg?alt=media&token=7d29010b-f05d-4e38-a4c4-cee3e4661e0e",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/tailor.jpg?alt=media&token=bbde075d-48b8-4979-8c57-6e11fde363b5",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/screen%20painting.jpg?alt=media&token=ef147b67-8d8f-478f-8de2-493f1f95ba6f",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/embroidering%20work%20machine.jpg?alt=media&token=ddb2d505-f964-4826-9096-1c6e489ddb49"];
  

  constructor() { }

  ngOnInit() {
  }


}