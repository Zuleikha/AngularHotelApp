import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
  //styles: [`h1 { color: red; }`]
})
export class AppComponent {
  title = 'hotelinvapp';

  role = 'Admin';
  //role = 'User';
  //role = 'default';
}
