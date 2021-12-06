// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('test should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You clicked on the skyline 7 times, on the castle 5 times, and on the waterfront 3 times.`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(7, 5, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
