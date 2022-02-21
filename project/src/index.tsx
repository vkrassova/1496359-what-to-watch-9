import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FilmInfo = {
  name: 'The Grand Budapest Hotel',
  genre: 'drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App filmInfo = {FilmInfo} />
  </React.StrictMode>,
  document.getElementById('root'));
