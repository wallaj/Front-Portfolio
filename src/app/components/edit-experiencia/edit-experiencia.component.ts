import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExperienciaLabService } from 'src/app/services/experiencia-lab.service';
import { ExperienciaLab } from 'src/app/model/experienciaLab.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  myGroup = new FormGroup({
    checkId: new FormControl,
    id: new FormControl,
    compa: new FormControl,
    fIngreso: new FormControl,
    fSalida: new FormControl,
    descrip: new FormControl
  });
     
  
  //Binding
  id!:number;
  comp!:string;
  fIngreso!:string;
  fSalida!:string;
  descrip!:string;

  //Objects
  experiencias!:ExperienciaLab[];
  experiencia!:ExperienciaLab;
  exp!:ExperienciaLab;

  //Checkers & Others
  chkStatus?:boolean;
  selection!:string;
  userId!:number;
  usuario!:Usuario;

  constructor(private experienciasService:ExperienciaLabService, private usuarioServ: UsuarioService) { }

  ngOnInit(): void {
    this.experienciasService.getExperiencias().subscribe(data=>{this.experiencias=data}); //Traemos las experiencias de la BBDD
   
    //apenas se renderiza el formulario
  }
  onChange(){
    
    console.log(this.myGroup.controls["checkId"].value)
    console.log(this.chkStatus);
    //this.chkStatus = !this.chkStatus;
  }
  onSelected(): void{
    console.log(this.chkStatus);
    console.log(this.selection);
    this.id = Number(this.selection);
  }
  onSearch():void{
    this.experienciasService.getExperienciasById(this.id).subscribe(data=>{this.experiencia=data});
    console.log(this.experiencia);
    this.userId = this.experiencia.user.id;
     console.log(this.userId);
  }
  
  onSubmit(){
    /*if(this.userId===null){this.userId=1}
    this.experiencia.compania = this.compania;
    this.experiencia.ingreso = this.ingreso;
    this.experiencia.salida = this.salida;
    this.experiencia.descripcion = this.descripcion;
    this.experienciasService.agregarExperiencia(this.userId,this.experiencia);*/


    if(this.chkStatus){//Editar exp ya cargada
      
     this.exp = new ExperienciaLab(this.myGroup.controls["compa"].value, this.myGroup.controls["fIngreso"].value,
       this.myGroup.controls["fSalida"].value, this.myGroup.controls["descrip"].value, this.experiencia.user);
      this.experienciasService.actualizarExperiencia(this.userId,this.exp).subscribe(data=>{alert("Experiencia Actualizada!")},
      err=>{alert("Error al editar experiencia!")});
      
    }else{

    }

  }
  onEdit(){/*
    if(this.userId===null){this.userId=1}
    this.compania = this.myGroup.controls['compa'].value;
    this.ingreso = this.myGroup.controls['fIngreso'].value;
    this.salida = this.myGroup.controls['fSalida'].value;
    this.descripcion = this.myGroup.controls['descrip'].value;
    this.experiencia = new ExperienciaLab(this.compania, this.ingreso, this.salida, this.descripcion);
    console.log(this.myGroup.controls['compa'].value,this.myGroup.controls['fIngreso'].value,this.myGroup.controls['fSalida'].value,
    this.myGroup.controls['descrip'].value, this.userId);*/
    //
    
    //console.log(this.experiencia, " editada");
    
  }

}
