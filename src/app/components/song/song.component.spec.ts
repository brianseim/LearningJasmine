import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SongComponent } from './song.component';
import {Song} from '../../model/song';

describe('SongComponent', () => {
  let component: SongComponent;
  let fixture: ComponentFixture<SongComponent>;
  let songEl: DebugElement;
  let expectedSong: Song;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongComponent);
    component = fixture.componentInstance;
    expectedSong = new Song('Welcome to the Jungle', 'Guns-n-Roses', '3:45', 'Brian');
    component.song = expectedSong;

    fixture.detectChanges();
    songEl = fixture.debugElement.query(By.css('.songView'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a song', () => {
    expect(component.song).toBeDefined();
  });

  it('should display song name', () => {
    expect(songEl.nativeElement.querySelector('.name').textContent).toContain(expectedSong.name);
  });

  it('should display song artist', () => {
    expect(songEl.nativeElement.querySelector('.artist').textContent).toContain(expectedSong.artist);
  });

  it('should display song duration', () => {
    expect(songEl.nativeElement.querySelector('.duration').textContent).toContain(expectedSong.getDuration());
  });

  it('should display song team member', () => {
    expect(songEl.nativeElement.querySelector('.teamMember').textContent).toContain(expectedSong.teamMember);
  });

  it('should raise delete event when delete icon clicked', () => {
    let deletedSong: Song;
    component.deleted.subscribe((song: Song) => deletedSong = song);
    const deleteIcon = songEl.nativeElement.querySelector('.fa-remove');
    deleteIcon.triggerEventHandler('click', null);
    expect(deletedSong).toBe(expectedSong);
  });
});
