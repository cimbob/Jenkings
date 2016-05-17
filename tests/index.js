var chai = require('chai'),
    assert = chai.assert,
    should = chai.should(),
    expect = chai.expect;

describe('Array', function() {

  describe('#indexOf()', function () {

    it('should return -1 when the value is not present', function () {

      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));

    });

    it('should return a value different than -1 when the value is present', function () {

      assert.notEqual(-1, [1,2,3].indexOf(1));
      assert.notEqual(-1, [1,2,3].indexOf(2));
      assert.notEqual(-1, [1,2,3].indexOf(3));

    });

  });

});
