// import React from 'react';
const React = require('react');
// import ReactDOM from 'react-dom';
const ReactDOM = require('react-dom');
// import App from './App';
const App = require('./App');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // expect(component).toMatchSnapshot();
});
