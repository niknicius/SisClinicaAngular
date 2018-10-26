import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ApiService {

  url: string = '//localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/pacientes');
  }

  post(endpoint: any, body: any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    console.log(body);
    return this.http.post(this.url + endpoint, body, httpOptions);
  }

  get(endpoint: any): Observable<any>{
    return this.http.get(this.url + endpoint);
  }

  getById(endpoint: any, id: any): Observable<any>{
    return this.http.get(this.url + endpoint + '/' + id);
  }
}