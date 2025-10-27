import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { filmFiltersApi } from './filmFilters'
import { Country, FilmPreview, Filtered, Genre } from '../types'

export const useGenreIdsQuery = () =>
  useQuery<Genre[], Error>({
    queryKey: ['filters', 'genreIds'],
    queryFn: () => filmFiltersApi.getGenreIds(),
  })

export const useCountryIdsQuery = () =>
  useQuery<Country[], Error>({
    queryKey: ['filters', 'countryIds'],
    queryFn: () => filmFiltersApi.getCountryIds(),
  })

export const useFilmsWithFiltersQuery = (filters: Filtered) =>
  useQuery<FilmPreview[], Error>({
    queryKey: ['films', 'filtered', filters],
    queryFn: () => filmFiltersApi.getFilmsWithFilters(filters),
  })

export const useMovieFilters = (filters: Filtered) =>{
  return useQuery<FilmPreview[], Error>(
    {
      queryKey: ['movieFilters', filters],
      queryFn: () => filmFiltersApi.getFilmsWithFilters({type: "FILM", ...filters})
    }
  )
}