import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
})
export class NgSwitchComponent implements OnInit {
 
  textoNgSwitch: string = 'A diretiva ngSwitch é uma diretiva que exibe um elemento de um possível conjunto de elementos com base em alguma condição.';

  constructor() { }

  ngOnInit(): void {
  }

}
