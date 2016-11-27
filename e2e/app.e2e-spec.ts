import { GithubReposPage } from './app.po';

describe('github-repos App', function() {
  let page: GithubReposPage;

  beforeEach(() => {
    page = new GithubReposPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
