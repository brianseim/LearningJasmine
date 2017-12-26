import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListsComponent } from './song-lists.component';
import {AppComponent} from '../../app.component';
import {TeamMemberService} from '../../services/team-member.service';
import {SongService} from '../../services/song.service';
import {SongList} from '../../model/song-list';
import {Song} from '../../model/song';

describe('SongListsComponent', () => {
  let component: SongListsComponent;
  let fixture: ComponentFixture<SongListsComponent>;
  class SongServiceStub {
    songs: Song[] = [];
    songLists: SongList[] = [];
    generateSongLists() {
      return [];
    }
  }

  const teamMemberServiceStub = {
    members: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListsComponent ],
      providers: [ {provide: SongService, useClass: SongServiceStub},
        {provide: TeamMemberService, useValue: teamMemberServiceStub}]
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
