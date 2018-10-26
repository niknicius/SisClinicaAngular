import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/pacientes');
  }

  apiPost(body: any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    console.log(body);
    return this.http.post('//localhost:8080/pacientes', body, httpOptions);

  }
}