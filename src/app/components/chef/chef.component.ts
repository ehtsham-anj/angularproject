import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breakfast:string="assets/images/banner-breakfast.jpg";
  lunch:string="assets/images/banner-lunch.jpg";
  dinner:string="assets/images/banner-dinner.jpg";
  chef:string="assets/images/chefather.png";

}
