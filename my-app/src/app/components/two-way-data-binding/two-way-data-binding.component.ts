import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
})
export class TwoWayDataBindingComponent implements OnInit {

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
