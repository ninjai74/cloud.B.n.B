import { Component, OnInit } from '@angular/core';
import { PlaceModel } from '../places.model';
import { MenuController } from '@ionic/angular';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlace: PlaceModel[];

  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlace = this.placesService.PLACES;
  }
}
