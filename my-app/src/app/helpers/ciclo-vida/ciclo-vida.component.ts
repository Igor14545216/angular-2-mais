import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html'
})
export class CicloVidaComponent implements OnInit {
  valor: number = 10;
  deletarCiclo: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  mudarValor() {
    this.valor++;
  }

  desctruirCiclo() {
    this.deletarCiclo = true;
  }

}