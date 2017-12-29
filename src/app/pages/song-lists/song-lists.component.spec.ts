import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListsComponent } from './song-lists.component';
import { TeamMemberService } from '../../services/team-member.service';
import { SongService } from '../../services/song.service';
import {TeamMember} from '../../model/team-member';
import {SongList} from '../../model/song-list';

describe('SongListsComponent', () => {
  let component: SongListsComponent;
  let fixture: ComponentFixture<SongListsComponent>;
  const songServiceStub = {
    generateSongLists: function() { return [
      new SongList([]),
      new SongList([])
    ]; }
  };

  const teamMemberServiceStub = {
    members: [
      new TeamMember('Johnny', [1]),
      new TeamMember('Clint', [1, 2]),
      new TeamMember('Lisa', [1, 2]),
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListsComponent ],
      providers: [ {provide: SongService, useValue: songServiceStub},
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
    const fixture2 = TestBed.createComponent(SongListsComponent);
    const app = fixture2.debugElement.componentInstance;
    expect(app.title).toEqual('Song Lists');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture3 = TestBed.createComponent(SongListsComponent);
    fixture3.detectChanges();
    const compiled = fixture3.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Song Lists');
  }));
});
