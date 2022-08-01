import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL ='http://localhost:8080/auth/';
  constructor(private http:HttpClient) { }

  public verUsuarioById(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.URL+'ver/user/'+id);
  }
}
