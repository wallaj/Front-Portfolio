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

  public getExperienciasById(id:number):Observable<ExperienciaLab>{
    return this.http.get<ExperienciaLab>(this.URL+'ver/experiencia/'+id);
  }

  public agregarExperiencia(userId:number, exp:ExperienciaLab):Observable<any>{
    return this.http.post<any>(this.URL+'user/new/experiencia/'+ userId,exp);
  }
  public actualizarExperiencia(userId:number, exp:ExperienciaLab):Observable<any>{
    return this.http.put<any>(this.URL+'user/actualizar/experiencia/'+ userId,exp);
  }
}
