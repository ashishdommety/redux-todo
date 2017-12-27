const sum = require('../src/sum.js');
// import sum from '../src/sum.js';

it('adds two numbers',() => {
  expect(sum(1,2)).toMatchSnapshot();
});
