import { NetworkPage } from './app.po';

describe('network App', function() {
  let page: NetworkPage;

  beforeEach(() => {
    page = new NetworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
