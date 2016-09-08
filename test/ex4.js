
const assert = require('assert');

describe('calculate call details using functions - that work for any dataset', function(){

    it('should find the total duration of all the calls', function(){

        // define a list of call durations
        var callDurations1 = [23, 47, 50, 17];
        var callDurations2 = [, , , ];

        //write a function that find the total call duration
            //use a for loop to visit each number and add it to a new number
            //var totalCallDuration = 0;

        assert.equal(totalDuration(callDurations1), 137);
        assert.equal(totalDuration(callDurations2), 264);

    });

    it('should find the cost for each call', function(){

        var callDurations = [23, 47, 50, 17];
        var callDurations2 = [23, 47, 50, 17];

        //create a function called - totalCallCosts
            // var callCost = 5;
            // var totalCallCosts = [];
            // loop through the callDurations list and push a
            // new entry into the totalCallCosts list for each call

        assert.deepEqual(totalCallCosts(callDurations), [115, 235, 250, 85]);
        assert.deepEqual(totalCallCosts(callDurations2), [115, 235, 250, 85]);

    });

    it('should find the total cost for all calls using indexes', function(){

        // Total call cost using indexes

        var totalCallCost = null;
        assert.equal(totalCost, 0);

    });
});
