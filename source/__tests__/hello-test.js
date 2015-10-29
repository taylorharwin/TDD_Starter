jest.dontMock('../hello.js');
var hello = require('../hello.js')


describe('hello', function(){
	it('prints something', function(){
		console.log(hello);
		expect(hello('there')).toEqual('hello there');
	})
});