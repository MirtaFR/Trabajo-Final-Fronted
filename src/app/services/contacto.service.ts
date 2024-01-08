import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto.model';

const baseUrl = 'http://localhost:8080/api/contacto';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(baseUrl);
  }

  get(id: any): Observable<Contacto> {
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

  findByNombre(nombre: any): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
