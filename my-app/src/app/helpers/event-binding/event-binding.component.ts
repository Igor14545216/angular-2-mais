import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: [
    `
    .highlight {
      background-color: gray;
      font-weight: bold;
    }
     `
  ]
})
export class EventBindingComponent implements OnInit {

  textoOutputProperty: string = 'Eventos do Javascript usados no Angular.Os bindings em angular são as formas de como a View interage com Model/(Compoment).';
  textoEx1: string = 'Ao adicionar o evento `(click)` do angular, pode-se criar um método no typescript:';
  textoEx2: string = 'Passando algum evento no html, posso capturá-lo no typscript e trazer o seu resutlado de volta por meio da interpolação. Resultados também exibidos no console.';
  textoDigitado: string = '';
  keyupEnter: string = '';
  blur: string = '';
  mouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  botaoClicado() {
    alert('Botão clicado');
  }

  /**
   * KeyboardEvent event keyup tipado com o tipo certo
   * HTMLInputElement Estou dizendo que é um input element do html
   */
  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
    this.textoDigitado = (<HTMLInputElement>event.target).value;
  }

  salvarKeyUpEnter(event: any) {
    console.log(event.target.value);
    this.keyupEnter = event.target.value
  }

  salvarBlur(event: any) {
    console.log(event.target.value);
    this.blur = event.target.value
  }

  onMouseOverOut() {
    this.mouseOver = !this.mouseOver;
  }
}
