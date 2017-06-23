import { FagamePage } from './app.po';

describe('fagame App', () => {
  let page: FagamePage;

  beforeEach(() => {
    page = new FagamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
