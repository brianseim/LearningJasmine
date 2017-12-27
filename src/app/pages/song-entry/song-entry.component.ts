import { Component, OnInit } from '@angular/core';
import {SongService} from '../../services/song.service';
import {TeamMemberService} from '../../services/team-member.service';
import {Song} from '../../model/song';
import {TeamMember} from '../../model/team-member';

@Component({
  selector: 'app-song-entry',
  templateUrl: './song-entry.component.html',
  styleUrls: ['./song-entry.component.css']
})
export class SongEntryComponent implements OnInit {
  title = 'Song Management Form';
  adding = false;
  songs: Song[] = [];
  team: TeamMember[] = [];
  constructor(private songService: SongService, private teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.getSongs();
    this.team = this.teamMemberService.members; // todo make observable.
  }

  loadTestData() {
    this.songService.loadTestData();
    this.getSongs();
    this.teamMemberService.loadTestData();
    this.team = this.teamMemberService.members; // todo make observable.
  }

  getSongs(): void {
    this.songService.getSongs().subscribe(songs => this.songs = songs);
  }

  addSong() {
    this.adding = true;
  }

  onSave(e) {
    this.songService.add(e);
    this.adding = false;
  }

  onUpdated(e, oldsong: Song){
    this.songService.updateSong(e, oldsong);
  }

  onDeleted(e) {
    this.songService.remove(e);
  }

  onCancelAdd(){
    this.adding = false;
  }
}
