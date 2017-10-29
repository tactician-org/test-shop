import { Component } from '@angular/core';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css']
})
export class OurProductComponent {
  name:string;
  items: any[] = ["https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/safty%20shirt.jpg?alt=media&token=20da9dbb-0294-44d7-8af6-a7e5f00538aa",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/polo%20shirt.jpg?alt=media&token=8f9cd650-1f44-4dcb-893b-2bd37cb49571",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/hoodie%20shirt-01.jpg?alt=media&token=7e696136-0d56-40b0-8693-32f23586e5ee",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/shirt%20short%20sleeve-01.jpg?alt=media&token=61cc5801-c01c-4870-b7b4-a4eb11c5085f",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/shirt-01.jpg?alt=media&token=9455f01f-6ffb-4774-aeaa-e28202b86b14",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/t-shirt-01.jpg?alt=media&token=ee833cba-ce6a-4e79-b25b-62a96c83c0f0",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/workshop%20shirt.jpg?alt=media&token=db7bd552-8ef5-433f-9bff-781a23bf6efd",
  "https://firebasestorage.googleapis.com/v0/b/gallery-shop.appspot.com/o/sweater%20shirt.jpg?alt=media&token=a583d163-2608-429f-8e58-ec7c162a76e1"];
  
  constructor() {
    this.name = 'Angular2'
  }
  buildArr(theArr: any[]){
   // debugger;
   var arrOfarr = [];
   for(var i = 0; i < theArr.length ; i+=4) {
       var row = [];
       for(var x = 0; x < 4; x++) {
         var value = theArr[i + x];
           if (!value) {
               break;
           }
           row.push(value);
       }
       arrOfarr.push(row);
   }
    return arrOfarr;
  }
}
 


