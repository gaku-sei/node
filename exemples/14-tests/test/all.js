var expect = require('chai').expect;

var casse = function() {
  throw new Error('Une erreur est survenue');
};

expect(42).to.be.a('number');

expect({test: 42}).to.have.any.keys('test');

expect(42).to.be.within(40, 50);

expect([1, 2, 3]).to.have.length(3).and.to.include(2);

expect('test').to.match(/st/);

expect(casse).to.throw(Error);
