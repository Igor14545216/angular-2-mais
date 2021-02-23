import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html'
})
export class NgIfComponent implements OnInit {

  textoNgIf: string = 'Usada para incluir ou excluir um elemento da interface do usuário, incluindo os elementos filhos do elemento. A marcação excluída por uma diretiva ngIf não será invisível, apenas não estará no DOM.';
  arrayExemplo1: string[] = [];
  arrayExemplo2: string[] = ["Array preenchido"];

  constructor() { }

  ngOnInit(): void {
  }

  mudarValor() {
    if (this.arrayExemplo1.length > 0) this.arrayExemplo1.splice(0, 1);
    else this.arrayExemplo1.push("Array prenchido");

    if (this.arrayExemplo2.length > 0) this.arrayExemplo2.splice(0, 1);
    else this.arrayExemplo2.push("Array prenchido");
  }

}
