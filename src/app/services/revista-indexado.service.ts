import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RevistaIndexado } from '../models/revista-indexado.model';

const baseUrl = 'http://localhost:8080/api/revista-indexado';

@Injectable({
  providedIn: 'root'
})
export class RevistaIndexadoService {
 
  constructor(private http: HttpClient) {}
  getAll(): Observable<RevistaIndexado[]> {
    return this.http.get<RevistaIndexado[]>(baseUrl);
  }

  get(id: any): Observable<RevistaIndexado> {
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

  findByreferencia(referencia: any): Observable<RevistaIndexado[]> {
    return this.http.get<RevistaIndexado[]>(`${baseUrl}?referencia=${referencia}`);
  }
}

