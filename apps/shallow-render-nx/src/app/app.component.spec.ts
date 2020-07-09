import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppModule} from './app.module';
import { Shallow } from 'shallow-render';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it(`should work with bind 'shallow-render-nx'`, async () => {
    const {find} = await shallow.render({bind: {myInput: 'My Test Input'}});
    expect(find('.myInput').nativeElement.textContent).toBe('My Test Input');
  });
});
