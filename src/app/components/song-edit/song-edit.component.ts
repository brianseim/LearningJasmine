import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Song} from '../../model/song';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  @Input() song: Song = new Song();
  songForm: FormGroup;
  @Output() cancelled = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.songForm = new FormGroup({
      name: new FormControl(this.song.name),
      artist: new FormControl(this.song.artist),
      duration: new FormControl(this.song.getDuration()),
      teamMember: new FormControl(this.song.teamMember)
    });
  }

  cancel() {
    this.cancelled.emit(null);
  }

}
