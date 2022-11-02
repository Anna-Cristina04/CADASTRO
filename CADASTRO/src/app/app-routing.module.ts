import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './atividade/home/home.component';
import { CadastrarComponent } from './atividade/cadastrar/cadastrar.component';
import { ConsultarComponent } from './atividade/consultar/consultar.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastrarComponent
  },
  {
    path: 'consulta',
    component: ConsultarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }