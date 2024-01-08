import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GradoAcademico } from '../models/grado-academico.model';

const baseUrl = 'http://localhost:8080/api/contacto';

@Injectable({
  providedIn: 'root'
})
export class GradoAcademicoService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<GradoAcademico[]> {
    return this.http.get<GradoAcademico[]>(baseUrl);
  }

  get(id: any): Observable<GradoAcademico> {
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

  findByNombre(nombre: any): Observable<GradoAcademico[]> {
    return this.http.get<GradoAcademico[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
