import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MovieInfo = {
  name: 'The Grand Budapest Hotel',
  genre: 'drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App movieInfo = {MovieInfo} />
  </React.StrictMode>,
  document.getElementById('root'));
