import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformacionGeneral } from '../models/informacion-general.model';

const baseUrl = 'http://localhost:8080/api/informacion_general';

@Injectable({
  providedIn: 'root'
})
export class InformacionGeneralService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<InformacionGeneral[]> {
    return this.http.get<InformacionGeneral[]>(baseUrl);
  }

  get(id: any): Observable<InformacionGeneral> {
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

  findByNombre(nombre: any): Observable<InformacionGeneral[]> {
    return this.http.get<InformacionGeneral[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
