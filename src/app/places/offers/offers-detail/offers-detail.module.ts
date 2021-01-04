import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersDetailPageRoutingModule } from './offers-detail-routing.module';

import { OffersDetailPage } from './offers-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersDetailPageRoutingModule
  ],
  declarations: [OffersDetailPage]
})
export class OffersDetailPageModule {}
