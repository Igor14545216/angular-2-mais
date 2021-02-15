import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-decorator-viewchild',
  templateUrl: './decorator-viewchild.component.html',
})
export class DecoratorViewchildComponent implements OnInit {

  valorEx1: number = 0;
  valorEx2: number = 0;

  textoViewchild: string = 'O ViewChild torna possível acessar um componente filho e chamar métodos ou acessar variáveis de instância que estão disponíveis para o filho, além de acessar um elemento DOM com variável local no HTML. Os dois exemplos a seguir é de acesso ao DOM.';

  textoExemplo1: string = 'Depois de ter criado a variável local no html com `#campoInput`, no typescript foi criado um decorator @ViewChild com a variável `campoValorInput`, e a mesma foi tipada com HTMLElement, podemos ver todos os eventos que um campo input pode disparar, além do value, etc. Para testar clique em um dos dois botões e veja o resultado no console.';

  textoExemplo2: string = 'Após a tipagem da variável de `HTMLElement` para `ElementRef` para fazer o uso de uma interface, odemos manipular a variável de acordo com sua necessidade. Neste exemplo, mostrei apenas o valor da variável `campoInput2` com `this.campoValorInput2.nativeElement.value`. Veja o resultado no console:'

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
