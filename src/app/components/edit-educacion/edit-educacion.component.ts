import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  myGroup = new FormGroup({
    checkId: new FormControl,
    id: new FormControl,
    lugar: new FormControl,
    curso: new FormControl,
    tipo: new FormControl,
    estado: new FormControl
  });

    //Binding
    id!:number;
    lugar!:string;
    curso!:string;
    tipo!:string;
    estado!:string;
  
    //Objects
    estudios!:Estudio[];
    estudio!:Estudio;
  
    //Checkers & Others
    chkStatus?:boolean;
    selection!:string;
    userId!:number;

  constructor(private estudioService: EstudioService) { }

  ngOnInit(): void {
    this.estudioService.getEstudios().subscribe(data=>{this.estudios=data});
  }

  onChange(){
  }

  onSelected(){
    this.id = Number(this.selection);
  }

  onSearch(){
    this.estudioService.getEstudiosById(this.id).subscribe(data=>{this.estudio=data});
  }

  onEdit(){
  }

  onSubmit(){
  }
}
