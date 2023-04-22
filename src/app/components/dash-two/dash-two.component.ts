import { CdkDragDrop, CdkDragEnd, CdkDragEnter, CdkDragExit, CdkDragMove, CdkDragRelease, CdkDragSortEvent, CdkDragStart, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dash-two',
  templateUrl: './dash-two.component.html',
  styleUrls: ['./dash-two.component.scss']
})
export class DashTwoComponent {

  // timePeriods = [
  //   'Bronze age',
  //   'Iron age',
  //   'Middle ages',
  //   'Early modern period',
  //   'Long nineteenth century',
  // ];

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  // }
  
  itemsOriginal:Array<string> = ['item1','item2','item3','item4'];
  items1:Array<string> = [];
  items2:Array<string> = [];
  items3:Array<string> = [];

  cdkDragDropped  (event: CdkDragDrop<any>)   { console.log('cdkDragDropped'); console.log(event); }
  cdkDragEnded    (event: CdkDragEnd)         { console.log('cdkDragEnded'); console.log(event); }
  cdkDragEntered  (event: CdkDragEnter<any>)  { console.log('CdkDragEnter'); console.log(event); }
  cdkDragExited   (event: CdkDragExit<any>)   { console.log('cdkDragExited'); console.log(event); }
  // cdkDragMoved    (event: CdkDragMove<any>)   { console.log('cdkDragMoved'); console.log(event); }
  cdkDragReleased(event: CdkDragRelease) {
    console.log('cdkDragReleased');
    console.log(event);
    event.source.element.nativeElement.classList.remove('moving')
  }
  cdkDragStarted(event: CdkDragStart) {
    console.log('cdkDragStarted');
    console.log(event);
    event.source.element.nativeElement.classList.add('moving')
  }

  /////////////////

  cdkDropListDropped(event: CdkDragDrop<string[]>) {
    console.log('cdkDropListDropped');
    console.log(event);
    if (event.previousContainer === event.container) {
      console.log('TROCAR POSIÇÃO');
      console.log(event.container.data);
      console.log('fromIndex: %d > to: %d', event.previousIndex, event.currentIndex);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('OUTRA LISTA');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  cdkDropListEntered(event: CdkDragEnter<any>) {
    console.log('cdkDropListEntered'); console.log(event);
  }
  cdkDropListExited(event: CdkDragExit<any>) {
    console.log('cdkDragExited'); console.log(event);
  }
  cdkDropListSorted(event: CdkDragSortEvent<any>) {
    console.log('cdkDropListSorted'); console.log(event);
  }
}
