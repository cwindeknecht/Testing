const assert = require('chai').expect;
const objectFunctions = require('../src/objects');
const sinon = require('sinon');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('`keys`', () => {
  it('should be a function', () => {
    const { keys } = objectFunctions;
    assert(keys).is.a('function');
  });
  it('should return [a,b,c]', () => {
    const { keys } = objectFunctions;
    const object = { a: 1, b: 2, c: 3 };
    assert(keys(object)).is.deep.equal(['a', 'b', 'c']);
  });
});

describe('`values`', () => {
  it('should be a function', () => {
    const { values } = objectFunctions;
    assert(values).is.a('function');
  });
  it('should return [1,2,3]', () => {
    const { values } = objectFunctions;
    const object = { a: 1, b: 2, c: 3 };
    assert(values(object)).is.deep.equal([1, 2, 3]);
  });
});

describe('`mapObject`', () => {
  it('should be a function', () => {
    const { mapObject } = objectFunctions;
    assert(mapObject).is.a('function');
  });
  it('should process the callback 3 times', () => {
    const { mapObject } = objectFunctions;
    const callBack = sinon.spy();
    const object = { a: 1, b: 2, c: 3 };
    mapObject(object, callBack);
    assert(callBack.calledThrice, true);
  });
  it('should return an object with all values of 1', () => {
    const { mapObject } = objectFunctions;
    const object = { a: 1, b: 2, c: 3 };
    const setToOne = x => (x = 1);
    const callBack = sinon.spy(setToOne);
    assert(mapObject(object, callBack)).to.deep.equal({ a: 1, b: 1, c: 1 });
  });
});

describe('`pairs`', () => {
  it('should be a function', () => {
    const { pairs } = objectFunctions;
    assert(pairs).to.be.a('function');
  });
  it('should return [[a,1],[b,2],[c,3]]', () => {
    const { pairs } = objectFunctions;
    const object = { a: 1, b: 2, c: 3 };
    assert(pairs(object)).to.deep.equal([['a', 1], ['b', 2], ['c', 3]]);
  });
});

describe('`invert`', () => {
  it('should be a function', () => {
    const { invert } = objectFunctions;
    assert(invert).to.be.a('function');
  });
  it('should return {1:a,2:b,3:c}', () => {
    const { invert } = objectFunctions;
    const object = { a: 1, b: 2, c: 3 };
    assert(invert(object)).to.deep.equal({ 1: 'a', 2: 'b', 3: 'c' });
  });
});

describe('`defaults', () => {
  it('should be a function', () => {
    const { defaults } = objectFunctions;
    assert(defaults).to.be.a('function');
  });
  it('should return {a:1,b:2,c:3,d:4}', () => {
    const { defaults } = objectFunctions;
    const obj = { a: 1, c: 3 };
    const defaultProps = {
      a: 1, b: 2, c: 3, d: 4
    };
    assert(defaults(obj, defaultProps)).to.deep.equal({
      a: 1, b: 2, c: 3, d: 4
    });
  });
});
