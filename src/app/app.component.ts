import { AfterViewInit, Component, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //styles: [`h1 { color: red; }`]
})
export class AppComponent implements OnInit {
  title = 'hotelinvapp';
  LoggerService: any;

  //@ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit () {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)

  constructor(@Optional() private loggerService: LoggerService) {

  }

  ngOnInit() {
    this.LoggerService?.Log('AppComponent.ngOnInit()');
    
      
  }

  // }
  //role = 'Admin';
  //role = 'User';
  //role = 'default';
}
