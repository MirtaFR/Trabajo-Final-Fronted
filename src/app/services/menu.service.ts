import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';

const baseUrl = 'http://localhost:8080/api/lugar_nacimiento';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(baseUrl);
  }

  get(id: any): Observable<Menu> {
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

  findByNombre(nombre: any): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
