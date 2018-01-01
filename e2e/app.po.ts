import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string = '/') {
    return browser.get(path);
  }

  getHeading1Text() {
    return element(by.css('app-root h1')).getText();
  }

  clickAddButton() {
    return element(by.css('#btnAdd')).click();
  }

  clickSaveButton() {
    return element(by.css('#btnSave')).click();
  }

  presenceOf(css: string) {
    return element(by.css(css)).isPresent();
  }
}
