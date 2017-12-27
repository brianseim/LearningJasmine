import { Injectable } from '@angular/core';
import {Song} from '../model/song';
import {SongList} from '../model/song-list';
import {TeamMember} from '../model/team-member';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class SongService {
  private songs: Song[] = [];
  songLists: SongList[] = [];

  constructor() { }

  getSongs(): Observable<Song[]> {
    return of(this.songs);
  }

  add(song: Song): void {
    this.songs.push(song);
  }

  updateSong(newSong: Song, oldSong: Song) {
    const index = this.songs.indexOf(oldSong);
    if (index >= 0) {
      this.songs[index] = newSong;
    }
  }

  remove(song: Song): void {
    this.songs.splice(this.songs.indexOf(song), 1);
  }

  generateSongLists(team: TeamMember[]): SongList[] {
    this.songLists = [];

    const userSongs: SongList[] = this.createUserSongLists(team);

    // Assumption: there are only two sections - if this were to change we should make a section model...
    for (let sectionNumber = 1; sectionNumber < 3; sectionNumber++) { // loop through 2 sections
      const teamForSection = team.filter(function(el){ return el.sections.indexOf(sectionNumber) >= 0; }); // who is present in this section?
      this.songLists[sectionNumber] = this.createNextSectionSongList(userSongs, teamForSection);
    }
    return this.songLists;
  }

  getTeamMemberSongList(name: string){
    return this.songs.filter(function(el){
      return el.teamMember === name;
    });
  }

  private createUserSongLists(team: TeamMember[]) {
    const userSongs: SongList[] = [];
    for (let ii = 0; ii < team.length; ii++) {
      team[ii].songs = this.getTeamMemberSongList(team[ii].name);
      userSongs[team[ii].name] = new SongList(team[ii].songs);
    }
    return userSongs;
  }

  private createNextSectionSongList(userSongs, sectionTeam): SongList {
    const sectionSongList = new SongList([]);
    let remainingTime = 30 * 60;

    let usersWithNoSuitableSong = 0;

    while (usersWithNoSuitableSong < sectionTeam.length) {
      for (let jj = 0; jj < sectionTeam.length; jj++){
        const currentUsersSongList = userSongs[sectionTeam[jj].name];
        const startingIndex = currentUsersSongList.pointerIndex;
        let newIndex = -1;
        while (currentUsersSongList.currentSong().durationSeconds > remainingTime && startingIndex !== newIndex) {
          currentUsersSongList.incrementPointerUnused();
          newIndex = currentUsersSongList.pointerIndex;
        }
        if (currentUsersSongList.currentSong().durationSeconds <= remainingTime) {
          sectionSongList.add(currentUsersSongList.currentSong());
          remainingTime -= currentUsersSongList.currentSong().durationSeconds;
          currentUsersSongList.useSong();
        } else {
          usersWithNoSuitableSong++;
        }
        currentUsersSongList.resetPointer();
      }
    }
    return sectionSongList;
  }

  loadTestData() {
    this.songs = [];
    this.songs.push(new Song('When I Come Around', 'Green Day', '3:25', 'Johnny'));
    this.songs.push(new Song('Otherside', 'Red Hot Chili Peppers', '4:23', 'Johnny'));
    this.songs.push(new Song('Good', 'Better Than Ezra', '3:14', 'Johnny'));
    this.songs.push(new Song('Last Kiss', 'Pearl Jam', '3:55', 'Johnny'));
    this.songs.push(new Song('Santa Monica', 'Everclear', '4:12', 'Johnny'));
    this.songs.push(new Song('Out of My Head', 'Fastball', '4:15', 'Clint'));
    this.songs.push(new Song('Cumbersome', 'Seven Mary Three', '3:10', 'Clint'));
    this.songs.push(new Song('Low', 'Cracker', '4:30', 'Clint'));
    this.songs.push(new Song('Fluorescent Adolescent', 'Arctic Monkeys', '5:00', 'Clint'));
    this.songs.push(new Song('Steady as She Goes', 'The Raconteurs', '3:45', 'Clint'));
    this.songs.push(new Song('Last Nite', 'The Strokes', '4:25', 'Lisa'));
    this.songs.push(new Song('Lydia', 'Highly Suspect', '4:44', 'Lisa'));
    this.songs.push(new Song('Big Me', 'Foo Fighters', '2:20', 'Lisa'));
    this.songs.push(new Song('Bleed American', 'Jimmy Eat World', '3:32', 'Lisa'));
    this.songs.push(new Song('Creep', 'Stone Temple Pilots', '5:15', 'Lisa'));
    this.songs.push(new Song('Come As You Are', 'Nirvana', '5:03', 'Lisa'));
  }
}
