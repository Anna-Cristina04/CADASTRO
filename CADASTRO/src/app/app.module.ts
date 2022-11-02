import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './atividade/home/home.module';
import { CadastrarModule } from './atividade/cadastrar/cadastrar.module';
import { ConsultarModule } from './atividade/consultar/consultar.module';

@NgModule({
  declarations: [
    
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    CadastrarModule,
    ConsultarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
