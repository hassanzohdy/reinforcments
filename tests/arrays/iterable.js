const { it, describe } = require('mocha');
const { should, expect } = require('chai');

const { $_ } = require('./../../dist/reinforcer.js');

should()

describe('Arrays', function () {
    it('iterables over the array', function () {
        let arrayItems = [2, 1, 3, 1];
        myArray = $_(arrayItems);

        for (let value of myArray) {
            let index = myArray.indexOf(value);
            expect(value).to.equal(arrayItems[index]);
        }
    });
});