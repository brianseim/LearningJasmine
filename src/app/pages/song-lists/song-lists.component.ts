import { Component, OnInit } from '@angular/core';
import {TeamMemberService} from '../../services/team-member.service';
import {SongService} from '../../services/song.service';
import {TeamMember} from '../../model/team-member';
import {SongList} from '../../model/song-list';

@Component({
  selector: 'app-song-lists',
  templateUrl: './song-lists.component.html',
  styleUrls: ['./song-lists.component.css']
})
export class SongListsComponent implements OnInit {
  title = 'Song Lists';
  team: TeamMember[] = [];
  songLists: SongList[] = [];

  constructor(private songService: SongService, private teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.team = this.teamMemberService.members; // todo make observable.
    if (this.songLists.length === 0) {
      this.createNextLists();
    }
  }

  createNextLists() {
    if (this.team && this.team.length > 0) {
      this.songLists = this.songService.generateSongLists(this.team);
    }
  }

  loadTestData() {
    this.songService.loadTestData();
    this.teamMemberService.loadTestData();
    this.team = this.teamMemberService.members; // todo make observable.
    this.songLists = this.songService.generateSongLists(this.team); // TODO make observable.
  }
}
