import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongEditComponent } from './song-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Song} from '../../model/song';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('SongEditComponent', () => {
  let component: SongEditComponent;
  let fixture: ComponentFixture<SongEditComponent>;
  let songEl: DebugElement;
  let expectedSong: Song;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ SongEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongEditComponent);
    component = fixture.componentInstance;
    expectedSong = new Song('Welcome to the Jungle', 'Guns-n-Roses', '3:45', 'Brian');
    component.song = expectedSong;

    fixture.detectChanges();
    songEl = fixture.debugElement.query(By.css('#songForm'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise a cancel event when cancel button clicked', () => {
    let wasItCancelled = false;
    component.cancelled.subscribe( () => wasItCancelled = true );
    fixture.debugElement.query(By.css('#btnCancel')).triggerEventHandler('click', null);
    expect(wasItCancelled).toBeTruthy();
  });

  it('should raise a save event when saved with correct data',
    () => {
   let song: Song = new Song();
   const expectedSong2 = new Song('testSong', 'testArtist', '3:30', 'Jack');
   component.saved.subscribe( (e) => song = e);
   component.songForm.value.name = expectedSong2.name;
   component.songForm.value.artist = expectedSong2.artist;
   component.songForm.value.duration = expectedSong2.getDuration();
   component.songForm.value.teamMember = expectedSong2.teamMember;

   fixture.debugElement.query(By.css('#btnSave')).triggerEventHandler('click', null);
   expect(song).toEqual(expectedSong2);
  });
});
