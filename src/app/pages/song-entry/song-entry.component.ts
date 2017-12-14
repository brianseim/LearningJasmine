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
  songs: Song[] = [];
  team: TeamMember[] = [];
  constructor(private songService: SongService, private teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.songs = this.songService.songs; // TODO make observable.
    this.team = this.teamMemberService.members; // todo make observable.
  }

  loadTestData() {
    this.songService.loadTestData();
    this.teamMemberService.loadTestData();
    this.songs = this.songService.songs; // TODO make observable.
    this.team = this.teamMemberService.members; // todo make observable.
  }
}
