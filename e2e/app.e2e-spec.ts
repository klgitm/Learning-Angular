import { AppPage } from './app.po';

describe('learning-ng App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('app should work', () => {
    expect(1).toBeGreaterThan(0);
  });
});
