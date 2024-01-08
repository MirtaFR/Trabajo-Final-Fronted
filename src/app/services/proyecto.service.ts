import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

const baseUrl = 'http://localhost:8080/api/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

 
  constructor(private http: HttpClient) {}
  getAll(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(baseUrl);
  }

  get(id: any): Observable<Proyecto> {
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

  findByreferencia(referencia: any): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${baseUrl}?referencia=${referencia}`);
  }
}
