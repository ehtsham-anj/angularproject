import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logo:string="assets/images/logo.png";
  search:string="assets/images/search.png";
  cart:string="assets/images/cart.png";
  

}

