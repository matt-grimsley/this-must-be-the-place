import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../place.model';

@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.component.html',
  styleUrls: ['./places-map.component.scss']
})
export class PlacesMapComponent implements OnInit {
  @Input() places: Place[];

  //define center of map
  lat = 53.2734;
  long = -7.77832031;

  constructor() { }

  ngOnInit(): void {
  }

}
