import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html'
})
export class NgIfComponent implements OnInit {

  textoNgIf: string = 'usada para incluir ou excluir um elemento da interface do usuário, incluindo os elementos filhos do elemento. A marcação excluída por uma diretiva ngIf não será invisível, apenas não estará no DOM.';

  constructor() { }

  ngOnInit(): void {
  }

}
