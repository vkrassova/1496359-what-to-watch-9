import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../constants';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../add-review/add-review';
import FilmPage from '../film-page/film-page';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {Film} from '../../types/films';
import {FilmRating} from '../../types/films';

type AppProps = {
  film: Film,
  films: Film[],
  rating: FilmRating[],
};

function App({films, film, rating}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.SignIn}
          element={<SignIn/>}
        />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.AddReview}
          element={<AddReview/>}
        />
        <Route
          path={AppRoutes.Film}
          element={<FilmPage/>}
        />
        <Route
          path={AppRoutes.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoutes.Main}
          element={<MainPage films={films} film={film}/>}
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
