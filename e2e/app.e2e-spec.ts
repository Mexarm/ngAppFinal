import { NgAppFinalPage } from './app.po';

describe('ng-app-final App', function() {
  let page: NgAppFinalPage;

  beforeEach(() => {
    page = new NgAppFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
