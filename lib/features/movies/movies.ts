export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: OriginalLanguage,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
  }

export interface UpcomingMoviesDto {
    dates: {
      maximum: string,
      minimum: string
    },
    page: number,
    results: Movie[]    
}

export type OriginalLanguage = 'en' | 'fr';