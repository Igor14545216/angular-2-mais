import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html'
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mudouValorPai(event: any) {
    console.log(event);
  }

}
