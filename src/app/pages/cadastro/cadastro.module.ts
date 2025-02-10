import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { FormsModule } from '@angular/forms'; // aqui eu importei o formulário


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule  // aqui habilitei o formulário no modulo
  ]
})
export class CadastroModule { }
