import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { PlaceModel } from '../../places.model';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
})
export class PageDetailPage implements OnInit {
  place: PlaceModel;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log('/Checking for ERROR/');
    console.log(this.place);
  }

  onBookPlace() {
  this.modalCtrl
  .create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}
  }).then(modalEl => {
    modalEl.present();
  });
  }

}
