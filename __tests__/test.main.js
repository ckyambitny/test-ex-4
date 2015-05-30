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
    });
});
