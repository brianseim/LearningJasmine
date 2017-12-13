import { Injectable } from '@angular/core';
import {Song} from '../model/song';

@Injectable()
export class SongService {
  songs: Song[] = [];

  constructor() { }

  add(song: Song) {
    this.songs.push(song);
  }

  remove(song: Song){
    this.songs.splice(this.songs.indexOf(song), 1);
  }

  removeByIndex(index: number) {
    this.songs.splice(index, 1);
  }

  loadDummyData() {
    this.songs = [];
    this.add(new Song('When I Come Around', 'Green Day', '3:25', 'Johnny'));
    this.add(new Song('Otherside', 'Red Hot Chili Peppers', '4:23', 'Johnny'));
    this.add(new Song('Good', 'Better Than Ezra', '3:14', 'Johnny'));
    this.add(new Song('Last Kiss', 'Pearl Jam', '3:55', 'Johnny'));
    this.add(new Song('Santa Monica', 'Everclear', '4:12', 'Johnny'));
    this.add(new Song('Out of My Head', 'Fastball', '4:15', 'Clint'));
    this.add(new Song('Cumbersome', 'Seven Mary Three', '3:10', 'Clint'));
    this.add(new Song('Low', 'Cracker', '4:30', 'Clint'));
    this.add(new Song('Fluorescent Adolescent', 'Arctic Monkeys', '5:00', 'Clint'));
    this.add(new Song('Steady as She Goes', 'The Raconteurs', '3:45', 'Clint'));
    this.add(new Song('Last Nite', 'The Strokes', '4:25', 'Lisa'));
    this.add(new Song('Lydia', 'Highly Suspect', '4:44', 'Lisa'));
    this.add(new Song('Big Me', 'Foo Fighters', '2:20', 'Lisa'));
    this.add(new Song('Bleed American', 'Jimmy Eat World', '3:32', 'Lisa'));
    this.add(new Song('Creep', 'Stone Temple Pilots', '5:15', 'Lisa'));
    this.add(new Song('Come As You Are', 'Nirvana', '5:03', 'Lisa'));
  }
}
