import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ds:DataService) { }
  users;
  ngOnInit(): void {
    this.ds.getUsers().subscribe((d)=>
    {
      this.users=d;
    })
  }

}
