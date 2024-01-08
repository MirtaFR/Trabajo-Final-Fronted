import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomicilioParticular } from '../models/domicilio-particular.model';

const baseUrl = 'http://localhost:8080/api/domicilio_particular';

@Injectable({
  providedIn: 'root'
})
export class DomicilioParticularService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<DomicilioParticular[]> {
    return this.http.get<DomicilioParticular[]>(baseUrl);
  }

  get(id: any): Observable<DomicilioParticular> {
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

  findByNombre(nombre: any): Observable<DomicilioParticular[]> {
    return this.http.get<DomicilioParticular[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
