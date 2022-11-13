import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { EfetivoComponent } from './efetivo/efetivo.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaNomeComponent } from './consulta-nome/consulta-nome.component';
import { ConsultaPlacaComponent } from './consulta-placa/consulta-placa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    EfetivoComponent,
    VeiculosComponent,
    LoginComponent,
    InicioComponent,
    ConsultaComponent,
    ConsultaNomeComponent,
    ConsultaPlacaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
