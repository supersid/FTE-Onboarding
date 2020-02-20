import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Form11TableService {
 url='http://localhost:8080/todo';
httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
  constructor(private _http:HttpClient) {
 
   }
 
public get_user_data(userId):Observable<any>
{
  return this._http.get(`${this.url}/api/get_formEleven_data?id=1`)
}
 
public saveEpsData(get):Observable<any>{
  const url=`${this.url}/api/save_formEleven_data`
  return this._http.post(url,get);
}
 
}

