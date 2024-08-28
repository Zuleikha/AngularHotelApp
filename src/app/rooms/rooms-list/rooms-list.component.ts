import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';
//import { EventEmitter } from 'node:stream';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {
    }

//   ngOnChanges(changes: SimpleChanges): void {
//     console.log(changes);
//     if(changes['title']) {
//       this.title = changes['room List'].currentValue.toUppercase();
//     }
// }


  ngOnInit(): void {

  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);

  }

}
