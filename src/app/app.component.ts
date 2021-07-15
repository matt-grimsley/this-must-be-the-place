import { Component } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'This Must Be The Place';

    constructor(private placesService: PlacesService) {}

    places$ = this.placesService.places$;
}
