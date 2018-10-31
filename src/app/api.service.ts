import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { RequestOptions, Headers, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ApiService implements OnInit {

  private id: number;
  private id2: number;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.id2 = params['id2'];
    });

  }

  url: string = 'http://localhost:8080/';
  url2: string = 'http://localhost:8080/pacientes/'+this.id+'/exames';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  getAll(endpoint: any): Observable<any> {
    return this.http.get(this.url + endpoint);
  }

  post(endpoint: any, body: any){

    console.log(body);
    return this.http.post(this.url + endpoint, body, this.httpOptions);
  }

  put(endpoint: any, body: any): Observable<any>{
    return this.http.put(this.url + endpoint, body, this.httpOptions);
  }

  get(endpoint: any): Observable<any>{
    return this.http.get(this.url + endpoint);
  }

  getById(endpoint: any, id: any): Observable<any>{
    return this.http.get(this.url + endpoint + '/' + id);
  }

  delete(endpoint: any, id: any): any{

    const url = this.http.delete(this.url + endpoint + id, {headers: this.httpOptions[0]}).subscribe((result) => {
      console.log(result);
    }, error => console.log('oops', error));
    return url;
  }
  getAllExame(): Observable<any> {
    return this.http.get('//localhost:8080/pacientes/'+this.id+'/exames');
  }

  postExame(endpoint: any, body: any){

    console.log(body);
    return this.http.post(this.url2 + endpoint, body, this.httpOptions);
  }

  putExame(endpoint: any, body: any): Observable<any>{
    return this.http.put(this.url2 + endpoint, body, this.httpOptions);
  }

  getExame(endpoint: any): Observable<any>{
    return this.http.get(this.url2 + endpoint);
  }

  getByIdExame(endpoint: any, id: any): Observable<any>{
    return this.http.get(this.url2 + endpoint + '/' + id);
  }

}