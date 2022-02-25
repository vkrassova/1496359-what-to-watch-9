import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {rating} from './mocks/rating';

const FilmInfo = {
  name: 'The Grand Budapest Hotel',
  genre: 'drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmInfo = {FilmInfo}
      films={films}
      rating={rating}
    />
  </React.StrictMode>,
  document.getElementById('root'));
