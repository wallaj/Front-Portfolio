import { Component, OnInit } from '@angular/core';
import { ExperienciaLab } from 'src/app/model/experienciaLab.model';
import { ExperienciaLabService } from 'src/app/services/experiencia-lab.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciasLab!: ExperienciaLab[];
  constructor(private experienciaLabService:ExperienciaLabService, private router:Router, 
    private tokenServ: TokenService) { }//inyección del servicio  y ruteo en el constructor

  isLogged:boolean = false;

  ngOnInit(): void {
    this.experienciaLabService.getExperiencias().subscribe(data=>{this.experienciasLab=data});
    console.log(this.experienciasLab);
    if(this.tokenServ.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
   onClick(){
    this.router.navigate(['/editExperiencia']);
   }

}
