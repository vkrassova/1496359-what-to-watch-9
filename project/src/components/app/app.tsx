import MainPage from '../main-page/main-page';

type AppProps = {
  movieInfo: {
    name: string,
    genre: string,
    released: number,
  }
};

function App({movieInfo}: AppProps): JSX.Element {
  return <MainPage name={movieInfo.name} genre={movieInfo.genre} released={movieInfo.released} />;
}

export default App;
