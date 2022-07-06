import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estudio } from '../model/estudio.model';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  URL ='http://localhost:8080/';
  constructor(private http: HttpClient) { }
  
  public getEstudios(): Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.URL+'ver/estudios');
  }
}
