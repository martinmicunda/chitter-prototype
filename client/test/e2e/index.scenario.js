describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('http://localhost:3000/#/');
  });

  it('should be publicly accessible and default route to be /projectsinfo', function() {
    expect(browser().location().path()).toBe("/");
  });
});