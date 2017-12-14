import { Injectable } from '@angular/core';
import {Song} from '../model/song';
import {SongList} from '../model/song-list';
import {TeamMember} from '../model/team-member';

@Injectable()
export class SongService {
  songs: Song[] = [];
  songLists: SongList[] = [];

  constructor() { }

  add(song: Song): void {
    this.songs.push(song);
  }

  remove(song: Song): void {
    this.songs.splice(this.songs.indexOf(song), 1);
  }

  getTeamMemberSongList(name: string){
    return this.songs.filter(function(el){
      return el.teamMember === name;
    });
  }

  generateSongLists(team: TeamMember[]): SongList[] {
    this.songLists = [];

    const userSongs: SongList[] = [];
    for (let ii = 0; ii < team.length; ii++){
      userSongs[team[ii].name] = new SongList(this.getTeamMemberSongList(team[ii].name));
    }

    // Assumption: there are only two sections - if this were to change we should make a section model...
    for (let sectionNumber = 1; sectionNumber < 3; sectionNumber++){ // loop through 2 sections
      const sectionTeam = team.filter(function(el){ return el.sections.indexOf(sectionNumber) >= 0; });
      const songList = new SongList([]);

      let sectionSongCount = 0;
      for (let mm = 0; mm < sectionTeam.length; mm++) {
        sectionSongCount += userSongs[sectionTeam[mm].name].songs.length;
      }

      let songTooLongCounter = 0;
      let remainingTime = 30 * 60;


      while (remainingTime > 0) {
        for (let kk = 0; kk < sectionTeam.length; kk++) {
          if (songTooLongCounter >= sectionSongCount) {
            break;
          }
          const currentSong = userSongs[sectionTeam[kk].name].currentSong();
          if (currentSong.durationSeconds < remainingTime && !currentSong.used) {
            userSongs[sectionTeam[kk].name].useSong();
            songList.add(currentSong);
            remainingTime -= currentSong.durationSeconds;
          } else {
            songTooLongCounter++;
          }

          userSongs[sectionTeam[kk].name].incrementPointer();
        }
        if (songTooLongCounter >= sectionSongCount) {
          remainingTime = -1;
        }
      }

      this.songLists[sectionNumber] = songList;
    }
    return this.songLists;
  }

  // removeByIndex(index: number) {
  //   this.songs.splice(index, 1);
  // }

  loadTestData() {
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
