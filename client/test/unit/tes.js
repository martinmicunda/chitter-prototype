'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
    beforeEach(module('chitterApp'));


    it('should be true....', inject(function() {
        expect(true).toBe(true);
    }));

    it('should be false....', inject(function() {
        expect(false).toBe(false);
    }));
});