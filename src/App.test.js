import React from 'react';
import ReactDOM from 'react-dom';
import AppFirstProgect from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppFirstProgect />, div);
  ReactDOM.unmountComponentAtNode(div);
});
