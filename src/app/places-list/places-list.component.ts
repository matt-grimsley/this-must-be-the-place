import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  @Input() places: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
  }

  onDelete(id: string){
    this.placesService.deletePlace(id);
  }
}
