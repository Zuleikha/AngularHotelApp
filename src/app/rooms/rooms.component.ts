import { ChangeDetectionStrategy, Component, OnInit, DoCheck, ViewChild, AfterViewInit, QueryList, ViewChildren, SkipSelf } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, SkipSelf {

  hotelName: string = 'Pilton Hotel';

  hideRooms: boolean = false;

  numberOfRooms: number = 100;

  //rooms!: Room;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 100,
    availableRooms: 50,
    bookedRooms: 10
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  //roomService = new RoomsService(); // create instance of class

  constructor(@SkipSelf() private roomsService: RoomsService) { }


  // constructor() {
  //   this.rooms = {
  //     totalRooms: 100,
  //     availableRooms: 50,
  //     bookedRooms: 10
  //   };
  // }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();

    //console.log(this.headerComponent);

  }
  ngDoCheck() {
    console.log('On changes is logged')
  }

  //implement interface AfterViewinit
  ngAfterViewInit() {
    //console.log(this.headerComponent);
    this.headerComponent.title = "Rooms View";
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }


  selectRoom(selectedRoom: RoomList) {
    this.selectedRoom = selectedRoom;
    console.log(`Room ${this.roomList} selected`);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Delux',
      amenities: 'Air Con, Free Wifi, Tv, Bathroom, kitchen',
      price: 600,
      photos: 'https://www.istockphoto.com/photo/woman-enjoys-magnificent-view-from-hotel-window-gm1447180306-485061744?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhotel&utm_medium=affiliate&utm_source=unsplash&utm_term=hotel%3A%3A%3A',
      checkInTime: new Date('18-Nov-2024'),
      checkOutTime: new Date('19-Nov-2024'),
      rating: 4.6

    };
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

}
