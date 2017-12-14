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

  loadTestData(){
    this.members = [];
    this.add(new TeamMember('Johnny', [1]));
    this.add(new TeamMember('Clint', [1, 2]));
    this.add(new TeamMember('Lisa', [1, 2]));
  }

  getMembersForSection(sectionNumber: number){
    return this.members.filter(function(el){
      return el.sections.indexOf(sectionNumber) >= 0;
    });
  }
}
