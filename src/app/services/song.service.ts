import { Injectable } from '@angular/core';
import {Song} from '../model/song';
import {SongList} from '../model/song-list';
import {TeamMember} from '../model/team-member';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {TEST_SONGS} from '../data/testsongs';

@Injectable()
export class SongService {
  private songs: Song[] = [];
  songLists: SongList[] = [];

  constructor() { }

  private static createNextSectionSongList(userSongs, sectionTeam): SongList {
    const sectionSongList = new SongList([]);
    let remainingTime = 30 * 60;

    let usersWithNoSuitableSong = 0;

    while (usersWithNoSuitableSong < sectionTeam.length) {
      for (let jj = 0; jj < sectionTeam.length; jj++) {
        const currentUsersSongList = userSongs[sectionTeam[jj].name];
        const startingIndex = currentUsersSongList.pointerIndex;
        let newIndex = -1;
        while (currentUsersSongList.currentSong().durationSeconds > remainingTime && startingIndex !== newIndex) {
          currentUsersSongList.incrementPointerUnused();
          newIndex = currentUsersSongList.pointerIndex;
        }
        if (currentUsersSongList.currentSong().durationSeconds <= remainingTime) {

          const currentSong: Song = new Song();
          Object.assign(currentSong, currentUsersSongList.currentSong());
          currentSong.used = false; // reset flag not used in the list.
          sectionSongList.add(currentSong);
          remainingTime -= currentSong.durationSeconds;
          currentUsersSongList.useSong();
        } else {
          usersWithNoSuitableSong++;
        }
        currentUsersSongList.resetPointer();
      }
    }
    return sectionSongList;
  }

  getSongs(): Observable<Song[]> {
    return of(this.songs);
  }

  getSongListLength(): number {
    return this.songs.length;
  }

  isSongInList(song: Song): boolean { // maybe in a future iteration only compare name and artist?
    return this.songs.indexOf(song) >= 0;
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
      const teamForSection = team.filter(function(el){
        return el.sections.indexOf(sectionNumber) >= 0;
      }); // who is present in this section?
      this.songLists[sectionNumber] = SongService.createNextSectionSongList(userSongs, teamForSection);
    }
    return this.songLists;
  }

  getTeamMemberSongList(name: string) {
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

  loadTestData() {
    this.songs = TEST_SONGS;
  }
}
