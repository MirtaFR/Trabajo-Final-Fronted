import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sni } from '../models/sni.model';

const baseUrl = 'http://localhost:8080/api/sni';

@Injectable({
  providedIn: 'root'
})
export class SniService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Sni[]> {
    return this.http.get<Sni[]>(baseUrl);
  }

  get(id: any): Observable<Sni> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByreferencia(referencia: any): Observable<Sni[]> {
    return this.http.get<Sni[]>(`${baseUrl}?referencia=${referencia}`);
  }
}
