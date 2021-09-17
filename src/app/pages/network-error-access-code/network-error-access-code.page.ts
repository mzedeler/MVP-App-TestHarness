import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network-error-access-code',
  templateUrl: './network-error-access-code.page.html',
  styleUrls: ['./network-error-access-code.page.scss'],
})
export class NetworkErrorAccessCodePage implements OnInit {
  results = [];
  constructor(private route: Router) {}

  ngOnInit() {
    fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
      this.results = json[0]['network_error_page'];
    });
  }
  confirm() {
    // this.route.navigate(['/access-code', {
    //   t: new Date().getTime()
    // }]);
    this.route.navigate(['/access-code']);
  }

  rpbtn() {
    this.route.navigate(['/tobecontinue']);
  }
  printbtn() {
    this.route.navigate(['/print-return']);
  }


}