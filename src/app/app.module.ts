import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ListingComponent } from './views/listing/listing.component';
import { PropertyComponent } from './views/property/property.component';
import { BuyComponent } from './views/buy/buy.component';
import { Checkout_BuyComponent } from './views/checkout_buy/checkout_buy.component';
import { Checkout_SellComponent } from './views/checkout_sell/checkout_sell.component';
import { SellComponent } from './views/sell/sell.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListingComponent,
    PropertyComponent,
    BuyComponent,
    Checkout_BuyComponent,
    Checkout_SellComponent,
    SellComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    Ng5SliderModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'listing', component: ListingComponent},
      {path: 'property', component: PropertyComponent},
      {path: 'buy', component: BuyComponent},
      {path: 'buy/checkout', component: Checkout_BuyComponent},
      {path: 'sell/checkout', component: Checkout_SellComponent},
      {path: 'sell', component: SellComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
