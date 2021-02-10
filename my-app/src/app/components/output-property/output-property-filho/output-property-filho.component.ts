import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-property-filho',
  templateUrl: './output-property-filho.component.html'
})
export class OutputPropertyFilhoComponent implements OnInit {

  @Input() valor: number = 0;
  @Input() valorOutput: number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  decrementa() {
    this.valor--;
  }

  incrementa() {
    this.valor++;
  }

  decrementaOutput() {
    this.valorOutput--;
    this.mudouValor.emit({ novoValor: this.valorOutput });
  }

  incrementaOutput() {
    this.valorOutput++;
    this.mudouValor.emit({ novoValor: this.valorOutput });
  }

}
