export class Song {
  id: number;
  name: string;
  artist: string;
  durationSeconds: number;

  getDuration() {
    try {
      return Math.floor(this.durationSeconds / 60) + ':' + ('00' + this.durationSeconds % 60).slice(-2);
    } catch (err) {
      throw new Error('duration not set');
    }
  }

  setDuration(strTime: string) {
    const rx = new RegExp(/^([0-9]+):([0-9]{2})$/);
    if (rx.test(strTime)) {
      const parts = rx.exec(strTime);
      const mins = +parts[1];
      const secs = +parts[2];
      if (parts.length === 3 && !isNaN(mins) && !isNaN(secs)){
        this.durationSeconds = (mins * 60) + secs;
        return;
      }
    }
    throw new Error('Duration must be of the format 0:00');
  }
}
