import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


getUsers()
{
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}

getCountries()
{
  return this.http.get('https://restcountries.eu/rest/v2/all');
}
getColors()
{
  return this.http.get('https://reqres.in/api/unknown');
}
}