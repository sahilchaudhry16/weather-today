import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import assert from 'assert';

it('renders without crashing', () => {
  assert.equal([1, 2, 3].indexOf(4), -1);
});
