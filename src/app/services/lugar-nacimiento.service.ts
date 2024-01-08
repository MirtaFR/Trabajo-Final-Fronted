import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LugarNacimiento } from '../models/lugar-nacimiento.model';

const baseUrl = 'http://localhost:8080/api/lugar_nacimiento';


@Injectable({
  providedIn: 'root'
})
export class LugarNacimientoService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<LugarNacimiento[]> {
    return this.http.get<LugarNacimiento[]>(baseUrl);
  }

  get(id: any): Observable<LugarNacimiento> {
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

  findByNombre(nombre: any): Observable<LugarNacimiento[]> {
    return this.http.get<LugarNacimiento[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
