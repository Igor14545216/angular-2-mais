import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
})
export class InputPropertyComponent implements OnInit {

  nomeVariavelPai: string = 'Variável do tipo string passada do componente InputPropertyComponent para o InputPropertyFilhoComponent usando o decorator @Input().';

  textInputProperty: string = 'O conceito é muito simples, você usará isso quando quiser receber dados de um component pai. Neste exemplo, o InputPropertyComponent será o arquivo pai e o InputPropertyFilhoComponent será o filho.'
  constructor() { }

  ngOnInit(): void {
  }

}
