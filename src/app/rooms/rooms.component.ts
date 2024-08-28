import { ChangeDetectionStrategy, Component, OnInit,DoCheck } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, DoCheck {

  hotelName: string = 'Pilton Hotel';

  hideRooms: boolean = false;

  numberOfRooms: number = 100;

  //rooms!: Room;

  selectedRoom!: RoomList;

  roomList: RoomList[] = [];

  rooms: Room = {
    totalRooms: 100,
    availableRooms: 50,
    bookedRooms: 10
  };

  title= 'Room list';

  // constructor() {
  //   this.rooms = {
  //     totalRooms: 100,
  //     availableRooms: 50,
  //     bookedRooms: 10
  //   };
  // }

  ngOnInit() {
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Single Room',
      amenities: 'Air Con, Free Wifi, Tv, Bathroom, kitchen',
      price: 500,
      photos: 'https://www.istockphoto.com/photo/woman-enjoys-magnificent-view-from-hotel-window-gm1447180306-485061744?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhotel&utm_medium=affiliate&utm_source=unsplash&utm_term=hotel%3A%3A%3A',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('12-Nov-2024'),
      rating: 3.6
    },
    {
      roomNumber: 2,
      roomType: 'Double Room',
      amenities: 'Air Con, Free Wifi, Tv, Bathroom, kitchen',
      price: 100,
      photos: 'https://www.istockphoto.com/photo/woman-enjoys-magnificent-view-from-hotel-window-gm1447180306-485061744?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhotel&utm_medium=affiliate&utm_source=unsplash&utm_term=hotel%3A%3A%3A',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('13-Nov-2024'),
      rating: 4.5
    },
    {
      roomNumber: 3,
      roomType: 'Private Room',
      amenities: 'Air Con, Free Wifi, Tv, Bathroom, kitchen',
      price: 1500,
      photos: 'https://www.istockphoto.com/photo/woman-enjoys-magnificent-view-from-hotel-window-gm1447180306-485061744?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhotel&utm_medium=affiliate&utm_source=unsplash&utm_term=hotel%3A%3A%3A',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('14-Nov-2024'),
      rating: 4.8
    }];
  }

  ngDoCheck() {
    console.log('On changes is logged')  
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
    this.roomList.push(room);
  }
}
