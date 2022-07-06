import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JWTdto } from '../model/jwtdto.model';
import { Login } from '../model/login.model';
import { NewUser } from '../model/newUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';
  
  constructor(private httpClient:HttpClient) { }

  public nuevoUser(newUser: NewUser): Observable<any>{
    return this.httpClient.post(this.authURL + 'new/user', newUser); //(URL, body) POST
  }
  public login(login:Login): Observable<JWTdto>{
    return this.httpClient.post<JWTdto>(this.authURL + 'login', login); //(URL, body) POST
  }
}
