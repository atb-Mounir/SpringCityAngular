import {Component, OnDestroy, OnInit} from '@angular/core';
import {CityWebService} from '../shared/webservices/city.webService';
import {AppComponent} from '../app.component';
import {City} from '../shared/models/city.model';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-city-service',
  templateUrl: './city-service.component.html',
  styleUrls: ['./city-service.component.scss']
})

export class CityServiceComponent implements OnInit, OnDestroy{

  city: City;
  constructor(
    private appComponent: AppComponent,
    private cityWebService: CityWebService

  ) {


   // cityWebService.getCity(1).subscribe(
   //   // tslint:disable-next-line:no-shadowed-variable
   //    (city) => {
   //      // Tout s'est bien passé
   //      console.log('getCity from API :', city);
   //      return city;
   //    }, (error) => {
   //      // Il y a eu une/des erreur(s)
   //      console.log('ERROR getCity from API :', error);
   //    }
   //  );



  }

    ngOnInit(): void {
      this.city = new City();
      const id = 1;
      this.cityWebService.getCity(id).subscribe(
        (city: City) => {
          this.city = city;
        }, (error) => {
          console.log('ERROR getCity from API :', error);
        }
      );

    }

  ngOnDestroy(): void {

  }


}
