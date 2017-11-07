import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { 

    
  }

  items: any[] = ["https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/phone.png?alt=media&token=926bde16-dd83-44a2-a10c-6c8f3e4be94d",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/location.png?alt=media&token=d1180a41-5164-4763-a2a3-31364c792e27",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/qr_code1600.png?alt=media&token=7b92a9fb-c181-4e0c-8022-1eb27f970938",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/facebook_circle_color-256.png?alt=media&token=7397b7eb-23d0-489e-bf68-28007020d435"
 ];
  

  ngOnInit() {
    
  }
 
  
  
}
