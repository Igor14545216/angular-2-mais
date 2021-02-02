import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
})
export class CursosComponent implements OnInit {

  nomePortal: string = 'http://loiane.training';
  cursos: string[] = ['Java', 'Angular', 'Ext JS']
  constructor() { }

  ngOnInit(): void {
  }

}
