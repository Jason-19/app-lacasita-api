import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = 'http://localhost:8000/products';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }

  
  public get(): Observable<any> {

    return this.http.get<any>(this.url, this.httpOptions);
  }

  public post():Observable<any>{

    return this.http.post(this.url, this.httpOptions);
  }

  public update():Observable<any>{

    return this.http.put(this.url, this.httpOptions);
  }

  public delete():Observable<any>{

    return this.http.delete(this.url,this.httpOptions);
  }


  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(this.url, product);
  }
}
