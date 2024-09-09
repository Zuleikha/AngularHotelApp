import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
    {
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) { 
    console.log(this.config.apiEndpoint);
    console.log('Rooms services Initialized....');
    //console.log(environment.apiEndpoint);
  }

  getRooms() {
    return this.roomList;

  }
}
