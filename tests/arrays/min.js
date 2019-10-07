const { it, describe } = require('mocha');
const { expect, should } = require('chai');

const { $_ } = require('./../../dist/reinforcer.js');

describe('Arrays', function() {
    it('#min()', function() {
        let myArray = $_([1, 2, 3]);

        expect(myArray.min()).to.equal(1);
    });
});