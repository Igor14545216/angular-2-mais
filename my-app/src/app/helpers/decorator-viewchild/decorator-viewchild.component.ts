import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-decorator-viewchild',
  templateUrl: './decorator-viewchild.component.html',
})
export class DecoratorViewchildComponent implements OnInit {

  valorEx1: number = 0;
  valorEx2: number = 0;

  /**
    O "!" A sintaxe existe para aqueles casos comuns em que você não pode garantir que o valor será definido imediatamente.
   */
  @ViewChild('campoInput') campoValorInput!: HTMLElement;
  @ViewChild('campoInput2') campoValorInput2!: ElementRef;

  /**
   * Na versão mais recente do @ViewChild é necessario passar um argumento se é static true ou false .
   * Quando você diz que ele é estático é porque é um elemento que não vai sumir em algum momento da execução, porque caso seja um elemento dinâmico, ele poderia ocorrer um erro quando você usasse uma diretiva ng.. por exemplo, essa nova atualização foi apenas uma precaução contra erros
   */
  // @ViewChild('campoInput', {static: true}) campoValorInput!: HTMLElement;

  constructor() { 
  }

  ngOnInit(): void {
  }


  decrementa() {
    console.log("campoValorInput", this.campoValorInput);
    this.valorEx1--;
  }

  incrementa() {
    console.log("campoValorInput", this.campoValorInput);
    this.valorEx1++;
  }

  _decrementa() {
    console.log("campoValorInput", this.campoValorInput2.nativeElement.value);
    this.campoValorInput2.nativeElement.value--;
  }

  _incrementa() {
    console.log("campoValorInput", this.campoValorInput2.nativeElement.value);
    this.campoValorInput2.nativeElement.value++;
  }
}
