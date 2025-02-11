import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  // Give us Access to the data of the current Route.
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId = -1;
  housingLocation: HousingLocation | undefined;

  constructor()
  {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }
}
