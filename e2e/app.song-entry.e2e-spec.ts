import { AppPage } from './app.po';

describe('orica App - Manage Songs', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Manage Songs page title "Song Management Form"', () => {
    page.navigateTo('/song-entry');
    expect(page.getHeading1Text()).toEqual('Song Management Form');
  });

  it('should hide the Add Song button after clicked',
    () => {
      page.navigateTo('/song-entry');
      page.clickAddButton();
      expect(page.presenceOf('#btnAdd')).toBeFalsy();
    });

  it('should show the Add Song form after clicking add button',
    () => {
      page.navigateTo('/song-entry');
      page.clickAddButton();
      expect(page.presenceOf('#frmAdd')).toBeTruthy();
    });

  it('should show the song on the list after saving',
    () => {
      page.navigateTo('/song-entry');
      expect(page.presenceOf('#frmAdd')).toBeFalsy();
      page.clickAddButton();
      page.fillField('#name', 'testName');
      page.fillField('#artist', 'testArtist');
      page.fillField('#duration', '3:30');
      page.fillField('#teamMember', 'testTeamMember');
      page.clickSaveButton();
      expect(page.presenceOf('#frmAdd')).toBeFalsy();
      expect(page.getText('.songView')).toBeTruthy();
    });
});
