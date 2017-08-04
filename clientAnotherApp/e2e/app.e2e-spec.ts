import { ClientAnotherAppPage } from './app.po';

describe('client-another-app App', () => {
  let page: ClientAnotherAppPage;

  beforeEach(() => {
    page = new ClientAnotherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
