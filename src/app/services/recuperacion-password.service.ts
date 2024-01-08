import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecuperacionPassword } from '../models/recuperacion-password.model';

const baseUrl = 'http://localhost:8080/api/recuperacion_password';

@Injectable({
  providedIn: 'root'
})
export class RecuperacionPasswordService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<RecuperacionPassword[]> {
    return this.http.get<RecuperacionPassword[]>(baseUrl);
  }

  get(id: any): Observable<RecuperacionPassword> {
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

  findByNombre(nombre: any): Observable<RecuperacionPassword[]> {
    return this.http.get<RecuperacionPassword[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
