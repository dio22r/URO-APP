import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AturNotifPage } from './atur-notif.page';

describe('AturNotifPage', () => {
  let component: AturNotifPage;
  let fixture: ComponentFixture<AturNotifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AturNotifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AturNotifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
