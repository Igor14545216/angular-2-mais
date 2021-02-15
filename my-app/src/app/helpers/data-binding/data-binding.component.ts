import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent implements OnInit {
  
  url: string = 'https://github.com/IgorSilva89/';
  urlImagem: string = 'https://i.pinimg.com/originals/c6/ba/25/c6ba259a54033b6bc15fc39b91245191.jpg';
  cursoAngular: boolean = true;
  textoInterpolacao: string = 'A Interpolação nada mais é do que um recurso de incorporar expressões dentro de uma área delimitada por {{ .. }}. ... Além da interpolação, podemos utilizar expressions em tags delimitados por colchetes, capturando o que queremos, seja de uma propriedade, ou de uma referência de variável.'

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
