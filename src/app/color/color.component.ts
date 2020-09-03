import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private ds:DataService) { }
colors;
  ngOnInit(): void {
    this.ds.getColors().subscribe((d)=>
    {
      this.colors=d;
    })
  }

}
