import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CityWebService} from './shared/webservices/city.webService';
import {City} from './shared/models/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  city: City;
  constructor(
    private cityWebService: CityWebService
  ) {
  }

  ngOnDestroy(): void {
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

}
