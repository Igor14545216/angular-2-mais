import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
})
export class CardGroupComponent implements OnInit {
  @Input() header: string = '';
  @Input() text: string = '';
  @Input() img1?: string = '';
  @Input() textImg1?: string = '';
  @Input() img2?: string = '';
  @Input() textImg2?: string = '';
  @Input() img3?: string = '';
  @Input() textImg3?: string = '';
  @Input() img4?: string = '';
  @Input() textImg4?: string = '';
  @Input() class1: string = '';
  @Input() class2?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
