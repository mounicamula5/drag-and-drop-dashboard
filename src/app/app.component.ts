import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drag-and-drop-dashboard';

  public todo: Todo[] = [
    { title: 'Vincent Kompany', dateAdded: new Date().toString() },
    { title: 'David Silva', dateAdded: new Date().toString() },
	{ title: 'Jesse Lingard', dateAdded: new Date().toString() },
	{ title: 'Ander Herrera', dateAdded: new Date().toString() },
	{ title: 'Kevin De Bruyne', dateAdded: new Date().toString() },
	{ title: 'Nicolás Otamendi', dateAdded: new Date().toString() },
	{ title: 'Sergio Agüero', dateAdded: new Date().toString() },
	{ title: 'Fernandinho', dateAdded: new Date().toString() },
    { title: 'Anthony Martial', dateAdded: new Date().toString() },
    { title: 'Ashley Young', dateAdded: new Date().toString() }
	
  ];

  public done: Todo[] = [
    { title: 'Carlos Tevez', dateAdded: new Date().toString() },
    { title: 'Gareth Barry', dateAdded: new Date().toString() },
    { title: 'Edin Džeko', dateAdded: new Date().toString() },
    { title: 'Aleksandar Kolarov', dateAdded: new Date().toString() },
    { title: 'Carlos Tevez', dateAdded: new Date().toString() }
  ];

  public cancelled: Todo[] = [
  
   { title: 'Marouane Fellaini', dateAdded: new Date().toString() },
    { title: 'Daley Blind', dateAdded: new Date().toString() }
  
  ];
  
  
  public next: Todo[] = [
  
   { title: 'Fellaini', dateAdded: new Date().toString() },
    { title: 'Blind', dateAdded: new Date().toString() }
  
  ];

  
  drop(event: CdkDragDrop<Todo[]>) {
    console.log(event);

    // first check if it was moved within the same list or moved to a different list
    if (event.previousContainer === event.container) {
      // change the items index if it was moved within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // remove item from the previous list and add it to the new array
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addItem(list: string, todo: string) {
    if (list === 'todo') {
      this.todo.push({ title: todo, dateAdded: new Date().toString() });
    } else if (list === 'done'){
      this.done.push({ title: todo, dateAdded: new Date().toString() });
    }
	else if (list === 'cancelled')
	{
		this.cancelled.push({ title: todo, dateAdded: new Date().toString() });
		
	}
	else
	this.next.push({ title: todo, dateAdded: new Date().toString() });
		
		
  }
}
