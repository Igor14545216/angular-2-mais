import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html'
})
export class OutputPropertyComponent implements OnInit {

  textoOutputProperty: string = 'Property usado para passar conteúdo do filho para o pai. Desde parâmetros simples até objetos complexos. A ordem de emissão de eventos no angular é a seguinte: Pai emite para o filho: Input(). Filho emite para o pai: @Output().';
  
  constructor() { }

  ngOnInit(): void {
  }

  mudouValorPai(event: any) {
    console.log(event);
  }

}
