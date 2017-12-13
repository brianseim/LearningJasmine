import { TestBed, inject } from '@angular/core/testing';

import { SongService } from './song.service';
import {Song} from '../model/song';

describe('SongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongService]
    });
  });

  it('should be created', inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));

  it('should be empty (zero songs)', inject([SongService], (service: SongService) => {
    expect(service.songs.length).toBe(0);
  }));

  it('should add one song', inject([SongService], (service: SongService) => {
    let s = new Song('When I Come Around', 'Green Day', '3:25', 'Johnny');
    service.add(s);
    expect(service.songs.length).toBe(1);
  }));

  it('should not contain the song removed by index and still contain 2 songs', inject([SongService], (service: SongService) => {
    service.add(new Song('Song1', 'Artist1', '3:25', 'name'));
    service.add(new Song('Song2', 'Artist2', '3:25', 'name'));
    service.add(new Song('Song3', 'Artist3', '3:25', 'name'));
    service.removeByIndex(1);
    expect(service.songs.filter(function(el){
      return el.name === 'Song2';
    }).length).toBe(0);
    expect(service.songs.length).toBe(2);
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
    service.loadDummyData();
    expect(service.songs.length).toBe(16);
  }));
});
