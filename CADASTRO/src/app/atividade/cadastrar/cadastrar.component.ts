import { Component } from "@angular/core";

@Component({

    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent{

    funcao(){
        localStorage.setItem('nome',this.nome)
        localStorage.setItem('email',this.email)
        localStorage.setItem('senha',this.senha)
        localStorage.setItem('estado',this.estado)
        localStorage.setItem('cidade',this.cidade)
        localStorage.setItem('bairro',this.bairro)
        localStorage.setItem('genero', this.genero)
        localStorage.setItem('idade', String(this.idade))
    }
    nome: string;
    email: string;
    senha: string;
    estado: string;
    cidade: string;
    bairro: string;
    genero: string;
    idade: string;
}