import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingLocation } from '../housinglocation';

/**
 * To use the routerLink is neccesary to import
 * the RouterModule from @angular/router
 */
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  // Get data from the parent Component
  /**
   * The ! is necessary because the @Input
   * requires the initialization of the variable
   * and it won't pass in this.
   */
  @Input() housingLocation!: HousingLocation;
}
