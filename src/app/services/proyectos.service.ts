import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  URL = 'http://localhost:8080/auth/';
  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL + 'ver/proyectos');
  }
}
