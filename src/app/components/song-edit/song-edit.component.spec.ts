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
});
