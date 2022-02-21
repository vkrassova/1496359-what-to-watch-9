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

type AppProps = {
  filmInfo: {
    name: string,
    genre: string,
    released: number,
  }
};

function App({filmInfo}: AppProps): JSX.Element {
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
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
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
          element={<MainPage name={filmInfo.name} genre={filmInfo.genre} released={filmInfo.released}/>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
