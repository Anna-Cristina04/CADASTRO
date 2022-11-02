import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadastrarComponent } from './cadastrar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    CadastrarComponent
  ]
})
export class CadastrarModule {

 }