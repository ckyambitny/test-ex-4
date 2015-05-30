jest.dontMock('../main');

var type = require('../main').type;

describe('check types', function () {
    it('number', function () {
        expect(type(1)).toEqual('number');
        expect(type(0)).toEqual('number');
        expect(type(NaN)).toEqual('number');
        expect(type(Infinity)).toEqual('number');
    });

    it('string', function () {
        expect(type('0')).toEqual('string');
        expect(type('foo')).toEqual('string');
        expect(type('')).toEqual('string');
    });

    it('object', function () {
        expect(type({})).toEqual('object');
        expect(type(new Object)).toEqual('object');
        expect(type(new Date)).toEqual('object');
        expect(type(window)).toEqual('object');
    });

    it('function', function () {
        expect(type(Function)).toEqual('function');
        expect(type(function foo() {})).toEqual('function');
    });

    it('a boolean', function () {
        expect(type(true)).toEqual('boolean');
        expect(type(false)).toEqual('boolean');
    });

    it('u....', function () {
        // TODO
    });

    // in ES6
    it('s....', function () {
        // TODO
    });
});
