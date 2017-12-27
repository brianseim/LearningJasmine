import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongEntryComponent } from './song-entry.component';
import {SongService} from '../../services/song.service';
import {TeamMemberService} from '../../services/team-member.service';
import {SongComponent} from '../../components/song/song.component';
import {SongEditComponent} from '../../components/song-edit/song-edit.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('SongEntryComponent', () => {
  let component: SongEntryComponent;
  let fixture: ComponentFixture<SongEntryComponent>;
  const songServiceStub = {
    songs: [],
    songLists: []
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

  it(`should have as title 'Song Management Form'`, async(() => {
    const fixture = TestBed.createComponent(SongEntryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Song Management Form');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SongEntryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Song Management Form');
  }));
});
