import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  t="this is my string";
  s=[{'name':'a','class':1},{'name':'b','class':2}];
  day=new Date;

  ngOnInit(): void {
  }

}
