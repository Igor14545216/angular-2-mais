import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-property-filho',
  templateUrl: './output-property-filho.component.html'
})
export class OutputPropertyFilhoComponent implements OnInit {

  @Input() valor: number = 0;
  @Input() valorOutput: number = 0;

  textoExemplo1: string = 'Aqui ocorre apenas o Input(). No html pai estou passando para o filho um property fixo com [valor]="10". No typescript filho estou recebendo esse parâmetro com @Input() valor: number = 0.';

  textoExemplo2: string = 'Usando o EventEmitter, consigo passar um valor do filho para o pai, por meio do property @Output(). Resultado no console.log colocado em OutputPropertyComponent.';

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
