import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './component/contact/contact.component';
import { OurServiceComponent } from './component/our-service/our-service.component';
import { OurProductComponent } from './component/our-product/our-product.component';
import { BannerComponent } from './component/banner/banner.component';

import * as primeng from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    OurServiceComponent,
    OurProductComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    primeng.GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
