import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AturProfilePage } from './atur-profile.page';

describe('AturProfilePage', () => {
  let component: AturProfilePage;
  let fixture: ComponentFixture<AturProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AturProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AturProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
