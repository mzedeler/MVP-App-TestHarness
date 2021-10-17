import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetworkErrorRequestCodePage } from './network-error-request-code.page';

describe('NetworkErrorRequestCodePage', () => {
  let component: NetworkErrorRequestCodePage;
  let fixture: ComponentFixture<NetworkErrorRequestCodePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkErrorRequestCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkErrorRequestCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
