import { Usuario } from "./usuario";

export class Estudio{
    id?:number;
    lugar:string;
    curso:string;
    tipo:string;
    estado:string;
    user:Usuario;   
    
    constructor(lugar:string, curso:string, tipo:string, estado:string, user:Usuario){
        this.lugar = lugar;
        this.curso = curso;
        this.tipo = tipo;
        this.estado = estado;
        this.user = user;
    }
}
