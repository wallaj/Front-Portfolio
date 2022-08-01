import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  estudios?: Estudio[]; 
  
  constructor(private estudioService: EstudioService, private router: Router, private tokenServ: TokenService)  { }
  
  isLogged:boolean = false;

  ngOnInit(): void {
    this.estudioService.getEstudios().subscribe(data=>{this.estudios = data});
    console.log(this.estudios);
    if(this.tokenServ.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  onClick(){
    this.router.navigate(['/editEducacion']);
   }
}
