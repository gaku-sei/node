var expect = require('chai').expect;
var math = require('../src/math');

describe('math', function() {
  describe('carré', function() {
    context('quand le nombre est négatif', function() {
      it('devrait retourner un nombre positif', function() {
        expect(math.carré(-42)).to.be.above(0);
      });
    });

    context('quand le nombre est positif', function() {
      it('devrait retourner un nombre positif', function() {
        expect(math.carré(42)).to.be.above(0);
      });
    });

    context('tout le temps', function() {
      it('devrait retourner le nombre au carré', function() {
        expect(math.carré(42)).to.equal(1764);
      });
    });
  });
});
