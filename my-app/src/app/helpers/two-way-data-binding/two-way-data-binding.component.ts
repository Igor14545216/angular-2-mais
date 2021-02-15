import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
})
export class TwoWayDataBindingComponent implements OnInit {

  textoTwoWayDataBinding: string = 'O Two way data binding basicamente é: o que acontece no DOM(View), reflete no typescript, e o que acontece no typescript(Model), reflete no DOM(View).';
  textoExemplo1: string = 'o que acontece no DOM(View), reflete no typescript, e o que acontece no typescript(Model), reflete no DOM(View).';
  textoExemplo2: string = 'Pode ser usado também com objetos complexos. No exemplo a seguir foi usado o [(ngModel)]="pessoa.nome" e [(ngModel)]="pessoa.idade."';
  nome: any = '';
  nome2: any = '';
  nome3: string = '';

  pessoa: any = {
    nome: 'batata',
    idade: 30,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
