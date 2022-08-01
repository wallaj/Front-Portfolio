import { Usuario } from "./usuario";

export class ExperienciaLab{
     id?:number;
     compania:string;
     ingreso:string;
     salida:string;
     descripcion:string;
     user:Usuario;    

     constructor(compania: string, ingreso: string, salida: string, descripcion: string, user:Usuario){
          this.compania = compania;
          this.ingreso = ingreso;
          this.salida = salida;
          this.descripcion = descripcion;
          this.user = user;
     }
}