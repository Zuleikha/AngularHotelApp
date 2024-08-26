import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'] // Corrected property name
})
export class RoomsComponent implements OnInit {

  hotelName: string = 'Pilton Hotel';

  hideRooms: boolean = false;

  numberOfRooms: number = 100;

  rooms!: Room; // Using type assertion to tell TypeScript that rooms will be defined

  roomList: RoomList[] = []; // Initialize roomList as an array of RoomList

  constructor() {
    this.rooms = {
      totalRooms: 100,
      availableRooms: 50,
      bookedRooms: 10
    };

    // Create data
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
      rating: 5
    }];
  }

  ngOnInit() {
    //console.log(this.roomList); // Log the roomList to verify its contents
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
