import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongEntryComponent } from './song-entry.component';
import { SongService } from '../../services/song.service';
import { TeamMemberService } from '../../services/team-member.service';
import { SongComponent } from '../../components/song/song.component';
import { SongEditComponent } from '../../components/song-edit/song-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {TEST_SONGS} from '../../data/testsongs';
import {TeamMemberComponent} from '../team-member/team-member.component';

describe('SongEntryComponent', () => {
  let component: SongEntryComponent;
  let fixture: ComponentFixture<SongEntryComponent>;
  const songServiceStub = {
    songs: TEST_SONGS,
    songLists: [],
    getSongs: function() { return Observable.of(this.songs); }
  };
  const teamMemberServiceStub = {
    members: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ SongEntryComponent, SongComponent, SongEditComponent ],
      providers: [ {provide: SongService, useValue: songServiceStub},
         {provide: TeamMemberService, useValue: teamMemberServiceStub}]
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

  it('should have the same songs as the service', () => {
    expect(component.songs).toEqual(songServiceStub.songs);
  });

  it(`should have as title 'Song Management Form'`, async(() => {
    const fixture2 = TestBed.createComponent(SongEntryComponent);
    const app = fixture2.debugElement.componentInstance;
    expect(app.title).toEqual('Song Management Form');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture3 = TestBed.createComponent(SongEntryComponent);
    fixture3.detectChanges();
    const compiled = fixture3.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Song Management Form');
  }));

  it('should have an add Song button', async( () => {
    const fixture4 = TestBed.createComponent(SongEntryComponent);
    fixture4.detectChanges();
    const compiled = fixture4.debugElement.nativeElement;
    expect(compiled.querySelector('#btnAdd').textContent).toContain('Add Song');
  }));
});
