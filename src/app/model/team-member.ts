import {Song} from './song';

export class TeamMember {
  // id: number;
  name: string;
  songs: Song[];
  sections: number[];

  constructor(name: string, sections: number[]= []){
    this.name = name;
    this.sections = sections;
  }
}
