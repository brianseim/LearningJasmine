import { SongService } from './song.service';
import { Song } from '../model/song';
import {TEST_SONG_RESULTS} from '../data/testsongresults';
import {TeamMember} from '../model/team-member';

describe('SongService w/o Test Data', () => {
  let service: SongService;

  beforeEach(() => {
    service = new SongService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be empty (zero songs)', () => {
    expect(service.getSongListLength()).toBe(0);
  });

  it('should add one song', () => {
    const s = new Song('When I Come Around', 'Green Day', '3:25', 'Johnny');
    service.add(s);
    expect(service.getSongListLength()).toBe(1);
  });

  it('should not contain the song removed by object and still contain 2 songs', () => {
    service.add(new Song('Song1', 'Artist1', '3:25', 'name'));
    const song2 = new Song('Song2', 'Artist2', '3:25', 'name');
    service.add(song2);
    service.add(new Song('Song3', 'Artist3', '3:25', 'name'));
    service.remove(song2);
    expect(service.isSongInList(song2)).toBeFalsy();
    expect(service.getSongListLength()).toBe(2);
  });
});

describe('SongService with Test Data', () => {
  let service: SongService;
  const teamServiceStub = {
    members: [
      new TeamMember('Johnny', [1]),
      new TeamMember('Clint', [1, 2]),
      new TeamMember('Lisa', [1, 2]),
    ]
  };

  beforeEach(() => {
    service = new SongService();
    service.add(new Song('When I Come Around', 'Green Day', '3:25', 'Johnny'));
    service.add(new Song('Otherside', 'Red Hot Chili Peppers', '4:23', 'Johnny'));
    service.add(new Song('Good', 'Better Than Ezra', '3:14', 'Johnny'));
    service.add(new Song('Last Kiss', 'Pearl Jam', '3:55', 'Johnny'));
    service.add(new Song('Santa Monica', 'Everclear', '4:12', 'Johnny'));
    service.add(new Song('Out of My Head', 'Fastball', '4:15', 'Clint'));
    service.add(new Song('Cumbersome', 'Seven Mary Three', '3:10', 'Clint'));
    service.add(new Song('Low', 'Cracker', '4:30', 'Clint'));
    service.add(new Song('Fluorescent Adolescent', 'Arctic Monkeys', '5:00', 'Clint'));
    service.add(new Song('Steady as She Goes', 'The Raconteurs', '3:45', 'Clint'));
    service.add(new Song('Last Nite', 'The Strokes', '4:25', 'Lisa'));
    service.add(new Song('Lydia', 'Highly Suspect', '4:44', 'Lisa'));
    service.add(new Song('Big Me', 'Foo Fighters', '2:20', 'Lisa'));
    service.add(new Song('Bleed American', 'Jimmy Eat World', '3:32', 'Lisa'));
    service.add(new Song('Creep', 'Stone Temple Pilots', '5:15', 'Lisa'));
    service.add(new Song('Come As You Are', 'Nirvana', '5:03', 'Lisa'));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should contain 16 songs', () => {
    expect(service.getSongListLength()).toBe(16);
  });

  it('should have 6 songs for Lisa', () => {
    expect(service.getTeamMemberSongList('Lisa').length).toBe(6);
  });

  it('should have 5 songs for Clint', () => {
    expect(service.getTeamMemberSongList('Clint').length).toBe(5);
  });

  it('should have 5 songs for Johnny', () => {
    expect(service.getTeamMemberSongList('Johnny').length).toBe(5);
  });

  it('song list output', () => {
    const songLists = service.generateSongLists(teamServiceStub.members);
    expect(songLists[1].songs.length).toBe(8);
    expect(songLists[2].songs.length).toBe(7);
  });

  it('song list result should match expected result', () => {
    const songLists = service.generateSongLists(teamServiceStub.members);
    expect(songLists).toEqual(TEST_SONG_RESULTS);
  });
});
