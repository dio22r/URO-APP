import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UbahAkunPage } from './ubah-akun.page';

describe('UbahAkunPage', () => {
  let component: UbahAkunPage;
  let fixture: ComponentFixture<UbahAkunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbahAkunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UbahAkunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
