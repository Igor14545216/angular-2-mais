import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
})
export class CursosComponent implements OnInit {

  nomePortal: string = 'http://loiane.training';
  cursos: string[] = [];

  constructor(private service: CursosService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(){
    this.cursos = this.service.getCursos();
  }

}
