import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html', 
  styles: [
    `
    .highlight {
      background-color: gray;
      font-weight: bold;
    }
     `
  ]
})
export class ClassStyleBindingComponent implements OnInit {

  textoStyleBinding: string = 'O Style binding é usada para definir um estilo de um elemento de visualização. Podemos definir os Style binding de um elemento HTML usando Style binding em angular. Você também pode adicionar estilos condicionalmente a um elemento, criando assim um elemento com estilo dinâmico.';
  textoEx1: string = 'Manipulando o css por meio do de uma variável HTML local criado no combo e aplicando a interpolação. Classes de alert do bootstrap 4.';
  textoEx2: string = 'Usando várias divs com condições. Sempre que satisfazer a condição dentro do property binding [class.classCss]="condição", irá setar a class no css na div correspondente.';
  textoEx3: string = 'Exemplo com mouseover e mouseout. Quando a variável `mouseOver` for true, será aplicada a classe css correspondente';
  mouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOverOut() {
    this.mouseOver = !this.mouseOver;
  }

}
