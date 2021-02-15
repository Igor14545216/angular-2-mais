import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
})
export class InputPropertyComponent implements OnInit {

  nomeVariavelPai: string = 'Variável do tipo string passada do componente InputPropertyComponent para o InputPropertyFilhoComponent usando o decorator @Input().';

  constructor() { }

  ngOnInit(): void {
  }

}
