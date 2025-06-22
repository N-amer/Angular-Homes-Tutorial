import {
    Component,
    input
} from '@angular/core';
import {
    HousingLocationInfo
} from '../housinglocation';
@Component({
    selector: 'app-housing-location',
    imports: [],
    template: `
    <p>housing-location works!</p>
  `,
    // styleUrls: [''],
})
export class HousingLocation {
    housingLocation = input.required < HousingLocationInfo > ();
}