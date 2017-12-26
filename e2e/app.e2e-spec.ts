import { AppPage } from './app.po';

describe('orica App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page title "Requirements"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Requirements');
  });
});
