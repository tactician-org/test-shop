import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GMapModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { ContactComponent } from './component/contact/contact.component';
import { OurServiceComponent } from './component/our-service/our-service.component';
import { OurProductComponent } from './component/our-product/our-product.component';
import { BannerComponent } from './component/banner/banner.component';
import { MapComponent } from './component/map/map.component';
import { SizeChartComponent } from './component/size-chart/size-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    OurServiceComponent,
    OurProductComponent,
    BannerComponent,
    MapComponent,
    SizeChartComponent
  ],
  imports: [
    GMapModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
