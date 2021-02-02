import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './cursos-detalhe/curso-detalhe.component';

@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent]
    ,
    imports: [CommonModule],
    exports: [CursosComponent],
    providers: [],
})
export class CursosModule { }