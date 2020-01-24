import { AppPage } from './app.po';

describe('learning-ng App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('app should work', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toBeDefined();
  });
});
