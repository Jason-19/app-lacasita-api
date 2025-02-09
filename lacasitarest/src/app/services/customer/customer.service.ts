import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url= 'http://localhost:8000/user'

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

  public post(url: string): Observable<any> {

    return this.http.post(this.url, this.httpOptions);
  }

  public update(url: string): Observable<any> {

    return this.http.put(this.url, this.httpOptions);
  }

  public delete(url: string): Observable<any> {

    return this.http.delete(this.url, this.httpOptions);
  }
}
