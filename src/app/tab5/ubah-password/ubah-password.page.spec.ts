import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UbahPasswordPage } from './ubah-password.page';

describe('UbahPasswordPage', () => {
  let component: UbahPasswordPage;
  let fixture: ComponentFixture<UbahPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbahPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UbahPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
