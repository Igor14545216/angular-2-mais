import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://github.com/Igor14545216/';
  cursoAngular: boolean = true;

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
