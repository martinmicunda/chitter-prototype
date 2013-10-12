describe('my app', function() {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should be publicly accessible and default route to be /', function() {
        expect(browser().location().path()).toBe("/");
    });

    it("should have tag h1 with text 'Welcome to Chitter!'", function() {
        expect(element("#welcome").text()).toEqual("\n        Welcome to Chitter!\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Sign Up\n    ");
    });
});