import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Song} from '../../model/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {
  @Input() song: Song;
  @Input() editing = false;
  @Output() updated = new EventEmitter<Song>();
  @Output() deleted = new EventEmitter<Song>();

  constructor() { }

  delete(song) {
    // todo get this to be testable or use a different approach // if (confirm('Are you sure you want to delete ' + song.name + '?')) {
      this.deleted.emit(song);
    // }
  }

  editForm() {
    this.editing = !this.editing;
  }

  onSave(e) {
    this.editing = false;
    this.updated.emit(e);
    // this.song = e;
  }

  onCancel(e) {
    this.editing = false;
  }
}
