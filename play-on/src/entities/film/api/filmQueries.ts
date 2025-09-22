import { useQuery } from '@tanstack/react-query'

import { Film } from './film'
import { Movie, StaffPerson } from '../types'

const useFilmBaseQuery = <T>(
  id: number,
  key: string,
  queryFn: (film: Film) => Promise<T>,
  config?: any
) => {
  return useQuery<T, Error>({
    queryKey: ['film', id, key],
    queryFn: () => queryFn(new Film(id)),
    ...config,
  })
}

export const useFilmQuery = (id: number) =>
  useFilmBaseQuery<Movie>(id, 'data', film => film.getMovieInfo()) 

export const useFilmTrailerQuery = (id: number) =>
  useFilmBaseQuery<String[]>(id, 'trailer', film => film.getTrailer()) 

export const useFilmStaffQuery = (id: number) =>
  useFilmBaseQuery<StaffPerson[]>(id, 'staff', film => film.getStaff(), { })