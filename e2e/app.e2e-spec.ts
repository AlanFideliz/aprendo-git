import { AprendendoGitPage } from './app.po';

describe('aprendendo-git App', () => {
  let page: AprendendoGitPage;

  beforeEach(() => {
    page = new AprendendoGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
