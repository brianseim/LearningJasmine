import {Song} from './song';

export class SongList {
  // identifier: string;
  songs: Song[];
  pointerIndex: number;

  constructor(songs: Song[], pointerIndex: number = 0) {
    // this.identifier = id;
    this.songs = songs;
    this.pointerIndex = pointerIndex;
  }

  add(song: Song) {
    this.songs.push(song);
  }

  currentSong() {
    return this.songs[this.pointerIndex];
  }

  useSong() {
    this.currentSong().used = true;
    this.incrementPointer();
  }

  incrementPointer() {
    this.pointerIndex++;
    if (this.pointerIndex >= this.songs.length) {
      this.resetPointer();
    }
  }

  incrementPointerToUnused() {
    if (this.isAllUsed()) {
      this.resetPointer();
    } else {
      while(this.currentSong().used) {
        this.incrementPointer();
      }
    }
  }

  isAllUsed() {
    return this.songs.filter( (s) => {
      return s.used === false;
    }).length === 0;
  }

  resetPointer() {
    if (this.isAllUsed()) {
      this.songs.map( (s) => { s.used = false; }); //reset used flag
      this.pointerIndex = 0;
    } else {
      this.pointerIndex = this.songs.map( (s) => {
        return s.used;
      }).indexOf(true);
    }
  }
}
