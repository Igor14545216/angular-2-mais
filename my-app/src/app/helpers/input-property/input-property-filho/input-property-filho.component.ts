import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property-filho',
  templateUrl: './input-property-filho.component.html',
  // inputs: ['nomeVariavelFilho1'] //declarar aqui também é correto
})
export class InputPropertyFilhoComponent implements OnInit {

  @Input() nomeVariavelFilho1: string = '';
  @Input('nome') nomeVariavelFilho2: string = '';

  textoExemplo: string = 'No typescript pai foi criado uma variável do tipo string "nomeVariavelPai" já inicializada com um valor. No html pai essa variável foi passada por meio do input property no selector do filho. No typescript filho foi criado uma variável usando o decorator de @Input com o mesmo nome passado no selector do html pai. No HTML filho foi feito uma interpolação para exibir o resultado da variável na tela.';

  constructor() { }

  ngOnInit(): void {
  }

}
