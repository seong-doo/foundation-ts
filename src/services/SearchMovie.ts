import { axios } from 'hooks/worker'
import { IMovieAPIRes } from 'types/SearchMovie.d'

const MOVIE_BASE_URL = 'https://www.omdbapi.com/?apikey=92e32667'

interface Params {
  s: string
  page: number
}

export const getMovieApi = (params: Params) => axios.get<IMovieAPIRes>(`${MOVIE_BASE_URL}`, { params })
