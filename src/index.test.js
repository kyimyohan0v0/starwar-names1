'use strict'

var expect = require('chai').expect;
var starwar = require('.');

describe('starwars-names', function(){
    it('all names must be string', function(){
        expect(starwar.names).to.be.satisfy(isArrayOfString);
    })

    it('get random name from list', function(){
        expect(starwar.getRandomName()).to.be.satisfy(isIncludeIn(starwar.names));
    })
})

function isArrayOfString(array) {
    return array.every(function(i) {
        return typeof i === 'string';
    });
}

function isIncludeIn(array) {
    return function(name) {
        return array.includes(name);
    }
}