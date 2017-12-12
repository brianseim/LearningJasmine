import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListsComponent } from './song-lists.component';
import {AppComponent} from '../../app.component';

describe('SongListsComponent', () => {
  let component: SongListsComponent;
  let fixture: ComponentFixture<SongListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'Song Lists'`, async(() => {
    const fixture = TestBed.createComponent(SongListsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Song Lists');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SongListsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Song Lists');
  }));
});
