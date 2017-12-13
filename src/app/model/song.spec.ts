import {Song} from './song';

describe('Song Model Class', () => {
  let songModel: Song;

  beforeEach(() => { songModel = new Song(); });

  it('Duration 90 seconds should give getDuration() of 1:30', () => {
    songModel.durationSeconds = 90;
    expect(songModel.getDuration()).toEqual('1:30');
  });

  it('setDuration() of 2:45 should give getDuration() of 2:45', () => {
    songModel.setDuration('2:45');
    expect(songModel.getDuration()).toEqual('2:45');
  });

  it('setDuration() of 2:55 should set durationSeconds to 175', () => {
    songModel.setDuration('2:55');
    expect(songModel.durationSeconds).toBe(175);
  });

  it('setDuration() of -1:30 should throw an error', () => {
    expect(function(){songModel.setDuration('-1:30'); }).toThrow(new Error('Duration must be of the format 0:00'));
  });

  it('setDuration() of "asdf" should throw an error', () => {
    expect(function(){songModel.setDuration('asdf'); }).toThrow(new Error('Duration must be of the format 0:00'));
  });

  it('setDuration() of 45 should throw an error', () => {
    expect(function(){songModel.setDuration('45'); }).toThrow(new Error('Duration must be of the format 0:00'));
  });
});
