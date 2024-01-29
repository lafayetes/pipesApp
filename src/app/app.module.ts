import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';


//Config for the locale on the app
import localEsBO from "@angular/common/locales/es-BO";
import localOsRU from "@angular/common/locales/os-RU";
import {registerLocaleData} from "@angular/common";

registerLocaleData(localEsBO);
registerLocaleData(localOsRU);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-BO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
