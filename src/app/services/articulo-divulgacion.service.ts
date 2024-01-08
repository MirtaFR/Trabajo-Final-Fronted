import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticuloDivulgacion } from '../models/articulo-divulgacion.model';

const baseUrl = 'http://localhost:8080/api/articulo_divulgacion';

@Injectable({
  providedIn: 'root'
})
export class ArticuloDivulgacionService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<ArticuloDivulgacion[]> {
    return this.http.get<ArticuloDivulgacion[]>(baseUrl);
  }

  get(id: any): Observable<ArticuloDivulgacion> {
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

  findByNombre(nombre: any): Observable<ArticuloDivulgacion[]> {
    return this.http.get<ArticuloDivulgacion[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
