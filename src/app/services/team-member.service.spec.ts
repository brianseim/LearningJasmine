import { TeamMemberService } from './team-member.service';
import {TeamMember} from '../model/team-member';

describe('TeamMemberService w/o TestBed', () => {
  let service: TeamMemberService;

  beforeEach(() => {
    service = new TeamMemberService();
    service.members = [
      new TeamMember('Johnny', [1]),
      new TeamMember('Clint', [1, 2]),
      new TeamMember('Lisa', [1, 2]),
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should contain 3 team members after loading default data', () => {
    expect(service.members.length).toBe(3);
  });

  it('Should contain 4 team members after loading default data and adding a member', () => {
      service.add(new TeamMember('Brian', [1, 2]));
      expect(service.members.length).toBe(4);
    });

  it('Should contain 2 team members w/o removed member after loading default data and removing a member', () => {
      const memberToRemove = service.members[1];
      service.remove(memberToRemove);
      expect(service.members.length).toBe(2);
      expect(service.members.indexOf(memberToRemove)).toEqual(-1);
    });

  it('should return 2 members for section 2', () => {
      expect(service.getMembersForSection(2).length).toBe(2);
    });

  it('should return 3 members for section 1', () => {
      expect(service.getMembersForSection(1).length).toBe(3);
    });
});
