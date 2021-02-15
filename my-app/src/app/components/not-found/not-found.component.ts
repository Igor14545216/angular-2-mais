import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  url: string = 'https://i.pinimg.com/originals/c6/ba/25/c6ba259a54033b6bc15fc39b91245191.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
