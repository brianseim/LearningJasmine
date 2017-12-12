import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongEntryComponent } from './song-entry.component';
import {AppComponent} from '../../app.component';

describe('SongEntryComponent', () => {
  let component: SongEntryComponent;
  let fixture: ComponentFixture<SongEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Song Entry Form'`, async(() => {
    const fixture = TestBed.createComponent(SongEntryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Song Entry Form');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SongEntryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Song Entry Form');
  }));
});
