import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.scriptMenu();
  }

  scriptMenu() {
    $(document).ready(function () {
      $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
      });
    });
  }

}
