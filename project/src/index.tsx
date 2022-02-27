import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {rating} from './mocks/rating';

ReactDOM.render(
  <React.StrictMode>
    <App
      film={films[1]}
      films={films}
      rating={rating}
    />
  </React.StrictMode>,
  document.getElementById('root'));
