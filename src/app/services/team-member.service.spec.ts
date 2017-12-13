import { TestBed, inject } from '@angular/core/testing';

import { TeamMemberService } from './team-member.service';
import {TeamMember} from '../model/team-member';

describe('TeamMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamMemberService]
    });
  });

  it('should be created', inject([TeamMemberService], (service: TeamMemberService) => {
    expect(service).toBeTruthy();
  }));

  it('Should contain 3 team members after loading default data', inject([TeamMemberService], (service: TeamMemberService) => {
    service.loadDefaultData();
    expect(service.members.length).toBe(3);
  }));

  it('Should contain 4 team members after loading default data and adding a member', inject([TeamMemberService], (service: TeamMemberService) => {
    service.loadDefaultData();
    service.add(new TeamMember('Brian', [1, 2]));
    expect(service.members.length).toBe(4);
  }));

  it('Should contain 2 team members after loading default data and removing a member', inject([TeamMemberService], (service: TeamMemberService) => {
    service.loadDefaultData();
    service.remove(new TeamMember('Clint', [1, 2]));
    expect(service.members.length).toBe(2);
  }));

});
