import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevaPassword } from '../models/nueva-password.model';

const baseUrl = 'http://localhost:8080/api/nueva_password';


@Injectable({
  providedIn: 'root'
})
export class NuevaPasswordService {

  
  constructor(private http: HttpClient) {}
  getAll(): Observable<NuevaPassword[]> {
    return this.http.get<NuevaPassword[]>(baseUrl);
  }

  get(id: any): Observable<NuevaPassword> {
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

  findByNombre(nombre: any): Observable<NuevaPassword[]> {
    return this.http.get<NuevaPassword[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
