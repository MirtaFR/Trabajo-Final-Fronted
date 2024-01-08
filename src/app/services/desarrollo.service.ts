import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Desarrollo } from '../models/desarrollo.model';

const baseUrl = 'http://localhost:8080/api/desarrollo';


@Injectable({
  providedIn: 'root'
})
export class DesarrolloService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Desarrollo[]> {
    return this.http.get<Desarrollo[]>(baseUrl);
  }

  get(id: any): Observable<Desarrollo> {
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

  findByNombre(nombre: any): Observable<Desarrollo[]> {
    return this.http.get<Desarrollo[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
