import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

constructor(

  private roteador:Router
){

}

abreProjeto(rota:string){

  console.log(rota);
   this.roteador.navigate([rota])

}







}
