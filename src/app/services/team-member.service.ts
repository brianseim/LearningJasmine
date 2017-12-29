import { Injectable } from '@angular/core';
import {TeamMember} from '../model/team-member';
import {TEST_TEAM} from '../data/testteam';

@Injectable()
export class TeamMemberService {
  members: TeamMember[];

  constructor() { }

  add(newMember: TeamMember) {
    this.members.push(newMember);
  }

  remove(removeMember: TeamMember) {
    this.members.splice(this.members.indexOf(removeMember), 1);
  }

  loadTestData() {
    this.members = TEST_TEAM;
  }

  getMembersForSection(sectionNumber: number) {
    return this.members.filter(function(el){
      return el.sections.indexOf(sectionNumber) >= 0;
    });
  }
}
