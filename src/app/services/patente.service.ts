import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patente } from '../models/patente.model';

const baseUrl = 'http://localhost:8080/api/patente';

@Injectable({
  providedIn: 'root'
})
export class PatenteService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Patente[]> {
    return this.http.get<Patente[]>(baseUrl);
  }

  get(id: any): Observable<Patente> {
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

  findByNombre(tipo: any): Observable<Patente[]> {
    return this.http.get<Patente[]>(`${baseUrl}?tipo=${tipo}`);
  }
}
