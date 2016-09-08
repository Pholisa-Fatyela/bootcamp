
const assert = require('assert');

describe('calculate call details using loops', function(){

    it('should find the total duration of all the calls', function(){

        // define a list of call durations
        var classDurations = [23, 47, 50, 17];

        //use a for loop to visit each number and add it to a new number
        var totalCallDuration = 0;

        //write for loop here

        assert.equal(totalCallDuration, 137)
    });

    it('should find the cost for each call', function(){

        var callDurations = [23, 47, 50, 17];
        var callCost = 5;
        var totalCallCosts = [];

        // loop through the callDurations list and push a
        // new entry into the totalCallCosts list for each call

        var totalCallCosts = null;
        assert.deepEqual(totalCallCosts, [115, 235, 250, 85]);

    });

    it('should find the total cost for all calls using indexes', function(){

        // Total call cost using indexes

        var totalCallCost = null;
        assert.equal(totalCost, 0);

    });
});
