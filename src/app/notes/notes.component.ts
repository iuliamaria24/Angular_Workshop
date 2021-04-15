import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [
    {
      id: "Id1",
      title: "Shopping List : ",
      description: "milk, sugar"
    },
    {
      id: "Id2",
      title: "Wishlist : ",
      description: " house, dog"
    },
    {
      id: "Id2",
      title: "To do List: ",
      description: "wash the car"
    }
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Note {
	id: string;
  title: string;
 	description: string;
}


