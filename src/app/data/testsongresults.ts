import {Song} from '../model/song';
import {SongList} from '../model/song-list';

export const TEST_SONG_RESULTS: SongList[] = [];

let songList = [];
songList.push(new Song('When I Come Around', 'Green Day', '3:25', 'Johnny'));
songList.push(new Song('Out of My Head', 'Fastball', '4:15', 'Clint'));
songList.push(new Song('Last Nite', 'The Strokes', '4:25', 'Lisa'));
songList.push(new Song('Otherside', 'Red Hot Chili Peppers', '4:23', 'Johnny'));
songList.push(new Song('Cumbersome', 'Seven Mary Three', '3:10', 'Clint'));
songList.push(new Song('Lydia', 'Highly Suspect', '4:44', 'Lisa'));
songList.push(new Song('Good', 'Better Than Ezra', '3:14', 'Johnny'));
songList.push(new Song('Big Me', 'Foo Fighters', '2:20', 'Lisa'));
TEST_SONG_RESULTS[1] = new SongList(songList);

songList = [];
songList.push(new Song('Low', 'Cracker', '4:30', 'Clint'));
songList.push(new Song('Bleed American', 'Jimmy Eat World', '3:32', 'Lisa'));
songList.push(new Song('Fluorescent Adolescent', 'Arctic Monkeys', '5:00', 'Clint'));
songList.push(new Song('Creep', 'Stone Temple Pilots', '5:15', 'Lisa'));
songList.push(new Song('Steady as She Goes', 'The Raconteurs', '3:45', 'Clint'));
songList.push(new Song('Come As You Are', 'Nirvana', '5:03', 'Lisa'));
songList.push(new Song('Big Me', 'Foo Fighters', '2:20', 'Lisa'));
TEST_SONG_RESULTS[2] = new SongList(songList);
