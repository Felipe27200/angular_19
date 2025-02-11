import { Component } from '@angular/core';

// Import the RouterModule to use the routing.
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    /*
    Here you have to write the components to be using
    by this component.
    */
    RouterModule
  ],
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
