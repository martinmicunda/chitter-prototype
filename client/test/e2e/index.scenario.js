describe('my app', function() {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should be publicly accessible and default route to be /', function() {
        expect(browser().location().path()).toBe("/");
    });

    it("should have tag h1 with text 'Welcome to Chitter!'", function() {
        expect(element("h1").text()).toEqual("Welcome to Chitter!");
    });
});