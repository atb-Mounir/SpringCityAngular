import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';
import {error} from '@angular/compiler/src/util';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CityWebService {

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line:typedef
  getCity(id: number){
    return this.http.get('http://localhost:8080/' + id);

  }


}
