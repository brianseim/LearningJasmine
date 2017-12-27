import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Song} from '../../model/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() song: Song;
  @Input() editing: boolean = false;
  @Output() updated = new EventEmitter<Song>();
  @Output() deleted = new EventEmitter<Song>();

  constructor() { }

  delete(song) {
    this.deleted.emit(song);
  }
}
