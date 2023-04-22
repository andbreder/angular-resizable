import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-four',
  templateUrl: './dash-four.component.html',
  styleUrls: ['./dash-four.component.scss']
})
export class DashFourComponent {

  items11:Array<string> = ['item1'];
  items12:Array<string> = [];
  items21:Array<string> = ['item2'];
  items22:Array<string> = ['item3'];
  items31:Array<string> = [];
  items32:Array<string> = ['item4'];

  disableDrag = true;
  
  cdkDropListDropped(event: CdkDragDrop<string[]>) {
    console.log('cdkDropListDropped');
    console.log(event);
    if (event.previousContainer === event.container) {
      console.log('é pra ter um item só na lista');
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('OUTRA LISTA');

      // tem nada no destino?
      if (event.container.data.length === 0) {
        // movimenta e tira do original
        transferArrayItem(event.previousContainer.data, event.container.data, 0, 0);
      } 
      // tem coisa no destino?
      else {
        // movimenta e TROCA com original
        // const indexDoDestino = event.container.data[0];
        transferArrayItem(event.previousContainer.data, event.container.data, 0, 0);
        transferArrayItem(event.container.data, event.previousContainer.data, 1, 0);
        // event.previousContainer.data = [indexDoDestino];
        // event.container.data = event.container.data.splice(event.container.data.indexOf(indexDoDestino), 1);
      }
    }
  }

}
