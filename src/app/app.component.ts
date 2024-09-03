import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
  //styles: [`h1 { color: red; }`]
})
export class AppComponent {
  title = 'hotelinvapp';

  //@ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit () {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)

  // }
  //role = 'Admin';
  //role = 'User';
  //role = 'default';
}
