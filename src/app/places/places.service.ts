import { Injectable } from '@angular/core';

import { PlaceModel } from './places.model';

@Injectable ({
  providedIn: 'root'
})
export class PlacesService
 {
  private _PLACES: PlaceModel[] = [
    new PlaceModel(
     'p1',
      'Zimbali Coastal Resort',
      'Beautiful 6 bedroom home in South Africa.',
      'https://turntable.kagiso.io/images/sophie_ndaba_house.width-800.jpg',
      150
    ),
    new PlaceModel(
     'p2',
      'Beautiful Beach House Property',
      'Come relax yourself with your love ones at the 5 bedroom home on the water side.',
      'https://www.africanvibes.com/wp-content/uploads/2018/11/Luxury-Homes-in-Africa.jpg?ezimgfmt=rs:378x252/rscb2/ng:webp/ngcb2',
      120
    ),
    new PlaceModel(
     'p3',
      'Beautiful 5 Bedroom Property',
      'Come relax yourself with your love ones at the 5 bedroom home on the water side.',
      'https://cricketwealthnyc.files.wordpress.com/2014/11/tryall.jpg?w=600',
      120
    ),
    new PlaceModel(
     'p4',
      'Stunning Beach Front Estate',
      'Playa Flamingo, Costa Rica.',
      'https://realestateadminimages.gabriels.net/170/77806/170-20170417151634712-690.jpg',
      200
    ),
  ];

  get PLACES() {
    return [...this._PLACES];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this.PLACES.find(p => p.id === id)};
  }
}
