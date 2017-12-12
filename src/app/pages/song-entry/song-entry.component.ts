import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-entry',
  templateUrl: './song-entry.component.html',
  styleUrls: ['./song-entry.component.css']
})
export class SongEntryComponent implements OnInit {
  title = 'Song Entry Form';

  constructor() { }

  ngOnInit() {
  }

}
