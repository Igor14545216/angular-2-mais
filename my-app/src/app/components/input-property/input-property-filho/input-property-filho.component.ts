import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property-filho',
  templateUrl: './input-property-filho.component.html',
  // inputs: ['nomeVariavelFilho1'] //declarar aqui também é correto
})
export class InputPropertyFilhoComponent implements OnInit {

  @Input() nomeVariavelFilho1: string = '';
  @Input('nome') nomeVariavelFilho2: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
