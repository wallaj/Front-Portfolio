import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = 'http://localhost:8080/auth/';
  constructor(private http: HttpClient) {}
   public getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.URL + 'ver/skills');
  }
}
