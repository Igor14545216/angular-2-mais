import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida-filho',
  templateUrl: './ciclo-vida-filho.component.html'
})
export class CicloVidaFilhoComponent implements OnInit {

  @Input() valorInicial: number = 0;
  
  constructor() {
    this.log('constructor');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(Hook: string) {
    console.log(Hook);
  }

}
