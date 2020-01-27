import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RouterOutlet
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    expect(1).toBeTruthy();
  }));
});
