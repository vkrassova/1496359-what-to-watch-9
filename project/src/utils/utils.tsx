import {Film} from '../types/films';

export const getFilmById = (films: Film[], id: number): Film | undefined => films.find((film) => film.id === id);
