import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro.model';

const baseUrl = 'http://localhost:8080/api/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Libro[]> {
    return this.http.get<Libro[]>(baseUrl);
  }

  get(id: any): Observable<Libro> {
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

  findByNombre(nombre: any): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
