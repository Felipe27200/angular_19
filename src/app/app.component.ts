import { Component } from '@angular/core';

// Components
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    /*
    Here you have to write the components to be using
    by this component.
    */
    HomeComponent
  ],
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
