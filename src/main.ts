import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Enable the routes in the application.
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  // Include the routing configuration.
  providers:[
    provideProtractorTestingSupport(),
    provideRouter(routeConfig)
  ]
}).catch((err) => console.error(err));
