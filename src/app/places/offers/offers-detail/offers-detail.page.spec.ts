import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffersDetailPage } from './offers-detail.page';

describe('OffersDetailPage', () => {
  let component: OffersDetailPage;
  let fixture: ComponentFixture<OffersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
