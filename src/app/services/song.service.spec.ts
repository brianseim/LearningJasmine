import { TestBed, inject } from '@angular/core/testing';

import { SongService } from './song.service';
import { Song } from '../model/song';
import { TeamMemberService } from './team-member.service';

describe('SongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongService, TeamMemberService]
    });
  });

  it('should be created', inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));

  it('should be empty (zero songs)', inject([SongService], (service: SongService) => {
    expect(service.songs.length).toBe(0);
  }));

  it('should add one song', inject([SongService], (service: SongService) => {
    const s = new Song('When I Come Around', 'Green Day', '3:25', 'Johnny');
    service.add(s);
    expect(service.songs.length).toBe(1);
  }));

  it('should not contain the song removed by object and still contain 2 songs', inject([SongService], (service: SongService) => {
    service.add(new Song('Song1', 'Artist1', '3:25', 'name'));
    const song2 = new Song('Song2', 'Artist2', '3:25', 'name');
    service.add(song2);
    service.add(new Song('Song3', 'Artist3', '3:25', 'name'));
    service.remove(song2);
    expect(service.songs.filter(function(el){
      return el.name === 'Song2';
    }).length).toBe(0);
    expect(service.songs.length).toBe(2);
  }));

  it('load dummy data should contain 16 songs', inject([SongService], (service: SongService) => {
    service.loadTestData();
    expect(service.songs.length).toBe(16);
  }));

  it('Lisa has 6 songs in default data', inject([SongService], (service: SongService) => {
    service.loadTestData();
    expect(service.getTeamMemberSongList('Lisa').length).toBe(6);
  }));

  it('Clint has 5 songs in default data', inject([SongService], (service: SongService) => {
    service.loadTestData();
    expect(service.getTeamMemberSongList('Clint').length).toBe(5);
  }));

  it('Johnny has 5 songs in default data', inject([SongService], (service: SongService) => {
    service.loadTestData();
    expect(service.getTeamMemberSongList('Johnny').length).toBe(5);
  }));

  it('song list output', inject([SongService, TeamMemberService], (service: SongService, teamService: TeamMemberService) => {
    teamService.loadTestData();
    service.loadTestData();
    const songLists = service.generateSongLists(teamService.members);
    expect(songLists[1].songs.length).toBe(8);
    expect(songLists[2].songs.length).toBe(7);
  }));
});
