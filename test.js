import { createRequire } from 'module'; // To create a require function
const require = createRequire(import.meta.url); // Create a require function

// Ensure Mocha is available by importing it
import('mocha').then(mochaModule => {
    const { describe, it } = mochaModule.default;

    // Load Chai after Mocha is available
    import('chai').then(chaiModule => {
        const chai = chaiModule.default;
        const expect = chaiModule.expect;
        const add = require('./app.cjs');

            it('should return the sum of two numbers', function() {
                const result = add(2, 3);
                // Use chai.expect here
                expect(result).to.equal(5);
            });
        // Run Mocha after tests are defined
        mochaModule.run();
    }).catch(error => {
        console.error('Error loading Chai:', error);
    });
}).catch(error => {
    console.error('Error loading Mocha:', error);
});
