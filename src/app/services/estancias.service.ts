import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estancias } from '../models/estancias.model';

const baseUrl = 'http://localhost:8080/api/estancias';

@Injectable({
  providedIn: 'root'
})
export class EstanciasService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Estancias[]> {
    return this.http.get<Estancias[]>(baseUrl);
  }

  get(id: any): Observable<Estancias> {
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

  findByNombre(nombre: any): Observable<Estancias[]> {
    return this.http.get<Estancias[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
