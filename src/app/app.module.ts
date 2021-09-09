import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CityWebService} from './shared/webservices/city.webService';
import {HttpClientModule} from '@angular/common/http';
import { CityServiceComponent } from './city-service/city-service.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AdminComponent } from './app/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CityServiceComponent,
    NavComponent,
    FooterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
