import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { async } from 'rxjs/internal/scheduler/async';


@Injectable()

export class TestService {
   constructor(private http: Http){

   }
   getApi(){
      // const url='http://api.openweathermap.org/data/2.5/find?units=metric&appid=3d029b9440d5d46824bb211b386f5f4d&q=london';
      const url='http://localhost:3000/companies';
      return this.http.get(url)
       .toPromise()
       .then(res => res.json())
      //  .then(resJson => resJson.list);
       .then(resJson => resJson.companies);
   }
}