import { AppPage } from './app.po';

describe('orica App - Manage Team', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Manage Team page title "Manage Team Members & Sections"', () => {
    page.navigateTo('/team');
    expect(page.getHeading1Text()).toEqual('Manage Team Members & Sections');
  });

  it('should hide the Add Team Member button after clicked',
    () => {
      page.navigateTo('/team');
      page.clickAddButton();
      expect(page.presenceOf('#btnAdd')).toBeFalsy();
    });

  it('should show the Add Team Member form after clicking add button',
    () => {
      page.navigateTo('/team');
      page.clickAddButton();
      expect(page.presenceOf('#frmAdd')).toBeTruthy();
    });
});
