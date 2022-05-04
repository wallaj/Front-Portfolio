import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  form:FormGroup;
  //inyectamos el servicio en el constructor del componente
  constructor(private formBuilder:FormBuilder, /*private autenticacionService: AutenticacionService, private ruta:Router*/) { 
    this.form=this.formBuilder.group({
      //email requerido (no empty), formato email
      email:['',[Validators.required, Validators.email]], 
      //password requerido (no empty), mínimo 8 caracteres
      password:['',[Validators.required, Validators.minLength(8)]],
      deviceInfo: this.formBuilder.group({
        deviceId: ["17867868768"],
        deviceType: ["DEVICE_TYPE_ANDROID"],
        notificationToken: ["67657575eececc34"]
      })
    })
  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

 /* onSend(event:Event){
    event.preventDefault;
    this.autenticacionService.inicioSesion(this.form.value).subscribe(data=>{
      console.log("DATA"+ JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);

    })
  }*/

}
