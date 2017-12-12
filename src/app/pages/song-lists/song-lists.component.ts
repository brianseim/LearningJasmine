import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-lists',
  templateUrl: './song-lists.component.html',
  styleUrls: ['./song-lists.component.css']
})
export class SongListsComponent implements OnInit {
  title = 'Song Lists';

  constructor() { }

  ngOnInit() {
  }

}
