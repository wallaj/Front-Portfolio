import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { EditExperienciaComponent } from './components/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './components/edit-educacion/edit-educacion.component';

const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'login',component:InicioSesionComponent},
  {path: 'editExperiencia',component:EditExperienciaComponent},
  {path: 'editEducacion', component:EditEducacionComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'}
];//Especificamos las rutas de la aplicación

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
