import { Injectable } from '@angular/core';
import {TeamMember} from '../model/team-member';

@Injectable()
export class TeamMemberService {
  members: TeamMember[];

  constructor() { }

  add(newMember: TeamMember){
    this.members.push(newMember);
  }

  remove(removeMember: TeamMember){
    this.members.splice(this.members.indexOf(removeMember), 1);
  }

  loadDefaultData(){
    this.members = [];
    this.members.push(new TeamMember('Johnny', [1]));
    this.members.push(new TeamMember('Clint', [1, 2]));
    this.members.push(new TeamMember('Lisa', [1, 2]));
  }
}
