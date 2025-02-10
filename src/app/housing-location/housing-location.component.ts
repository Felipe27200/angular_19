import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
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
