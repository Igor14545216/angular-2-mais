import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
})
export class DiretivasComponent implements OnInit {

  textoDiretivas: string = 'Diretivas estruturais são responsáveis por geralmente manipular o DOM, adicionando ou removendo elementos. Podemos reconhecê-los através do asterisco (*) que segue com o atributo da diretiva. Por exemplo, o Angular nos provê algumas diretivas estruturais, como: ngFor, ngIf e ngSwitchCase.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
