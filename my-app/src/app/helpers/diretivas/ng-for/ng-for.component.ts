import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
})
export class NgForComponent implements OnInit {

  textoNgFor: string = 'Esta é uma diretiva para processar cada item de um objeto iterável, gerando uma marcação para cada um. Ela é conhecida como uma diretiva estrutural porque pode alterar o layout do DOM adicionando e removendo elementos DOM de visualização.';
  constructor() { }

  ngOnInit(): void {
  }

}
