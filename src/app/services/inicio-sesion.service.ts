import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InicioSesion } from '../models/inicio-sesion.model';

const baseUrl = 'http://localhost:8080/api/inicio_sesion';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<InicioSesion[]> {
    return this.http.get<InicioSesion[]>(baseUrl);
  }

  get(id: any): Observable<InicioSesion> {
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

  findByNombre(nombre: any): Observable<InicioSesion[]> {
    return this.http.get<InicioSesion[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
