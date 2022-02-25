export type Film = {
  id: number,
  name: string,
  posterImage: string,
  backgroundColor: string,
  videoLink: string,
  description: string,
  director: string,
  starring: [string],
  rating: number,
  scoresCount: number,
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean
};

export type FilmReview = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    id: number,
    name: string
  }
};

export type FilmRating = {
  id: number
};
