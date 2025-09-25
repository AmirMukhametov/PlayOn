import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { filmFiltersApi } from './filmFilters'
import { FilmPreview, Filtered, Genre } from '../types'

export const useGenreIdsQuery = () =>
  useQuery<Genre[], Error>({
    queryKey: ['filters', 'genreIds'],
    queryFn: () => filmFiltersApi.getGenreIds(),
  })

export const useCountryIdsQuery = () =>
  useQuery<number[], Error>({
    queryKey: ['filters', 'countryIds'],
    queryFn: () => filmFiltersApi.getCountryIds(),
  })

export const useFilmsWithFiltersQuery = (filters: Filtered) =>
  useQuery<FilmPreview[], Error>({
    queryKey: ['films', 'filtered', filters],
    queryFn: () => filmFiltersApi.getFilmsWithFilters(filters),
  })