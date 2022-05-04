import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRountingModule } from './app-rounting.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LogoAPComponent,
    RrssComponent,
    BannerComponent,
    AboutComponent,
    InicioSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
