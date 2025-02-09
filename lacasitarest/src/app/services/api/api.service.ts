import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; // Importamos Observable de RxJS

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url_products = 'http://localhost:8000/products';
  url_order = 'http://localhost:8000/order'
  url_login = 'http://localhost:8000/user'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }
/*
  
  public get(): Observable<any> {

    return this.http.get<any>(this.url_products, this.httpOptions);
  }

  public post(url:string):Observable<any>{

    return this.http.post(this.url_products, this.httpOptions);
  }

  public update(url:string):Observable<any>{

    return this.http.put(this.url_products, this.httpOptions);
  }

  public delete(url:string):Observable<any>{

    return this.http.delete(this.url_products,this.httpOptions);
  }*/




}
