export type Film = {
  id: number,
  name: string,
  posterImage: string,
  backgroundImage: string,
  backgroundColor?: string,
  videoLink: string,
  previewVideoLink: string,
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
