import { Component, OnInit } from '@angular/core';
import {City} from '../../models/city.model';
import {CityWebService} from '../../webservices/city.webService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private cityWebService: CityWebService
  ) { }

  city: City;
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
