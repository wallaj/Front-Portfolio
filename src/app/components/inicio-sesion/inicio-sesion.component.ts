import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent implements OnInit {
  
  isLogged = false;
  isLoginFail = false;
  loginUser!: Login;
  email!:string;
  password!:string;
  roles: string[] = [];
  errorMsj!:string;

  constructor(private tokenService:TokenService, private authService:AuthService, private router:Router){ }

  ngOnInit(): void {
    if(this.tokenService.getToken()){ //Comprueba si estamos loggeados. Si devuelve un token, True.
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUser =  new Login(this.email!, this.password!);
    this.authService.login(this.loginUser).subscribe(data =>{ this.isLogged = true; this.isLoginFail = false;
        this.tokenService.setToken(data.token!);this.tokenService.setUserName(data.email!), this.tokenService.setAuthorities(data.authorities!);
        this.roles = data.authorities!; this.router.navigate([' '])}, error =>{this.isLogged = false; this.isLoginFail = true; 
          this.errorMsj = error.error.mensaje; console.log(this.errorMsj)}
        );
  }


}
