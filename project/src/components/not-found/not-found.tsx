import {Link} from "react-router-dom";

function NotFound(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="visually-hidden">Not Found</h2>
      <div className="catalog__more">
        <div className="catalog__button">
          <b style={{fontSize: '56px', color: '#dc143c'}}>404</b>
          <p style={{fontSize: '48px', color: '#dc143c'}}>Not Found</p>
          <Link to="/" style={{color: '#ff8c00'}}>Go back to the main page</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
