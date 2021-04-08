import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  txtUperCase:string = 'efgh';
  txtSplice:string = "Leonardo";
  txtLowercase ="ABCD";
  color = 'yellow';
  array= ['dog','cat','frog','pig'];
  people:any[]=[
    {
      name: "Maria",
      age: 14
    },
    {
      name: "Alex",
      age: 19
    },
    {
      name: "Ionut",
      age: 10
    },
    {
      name: "Maia",
      age: 14
    },
    {
      name : "Ana",
      age : 2
    },
    {
      name : "Ioana",
      age : 6
    },
    {
      name : "Dana",
      age : 23
    }
  ];
  currentDate:Date = new Date(2021, 4, 1);
  constructor() { }

  ngOnInit(): void {
  }

}
