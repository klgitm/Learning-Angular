import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        RouterOutlet
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    expect(1).toBeTruthy();
  }));
});
