import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLab } from '../model/experienciaLab.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLabService {
  URL ='http://localhost:8080/auth/';
  constructor(private http: HttpClient) { }
  
  public getExperiencias(): Observable<ExperienciaLab[]>{
    return this.http.get<ExperienciaLab[]>(this.URL+'ver/experiencias');
  }//método http con el tipo de dato que retorna y como parámetro, la url de la api a ejecutar
}
