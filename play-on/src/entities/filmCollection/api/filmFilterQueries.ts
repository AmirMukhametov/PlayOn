import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { FilmFilters } from './filmFilters'
import { FilmPreview, FilmResponse, Filtered, Genre } from '../types'


export const useGenreIdsQuery = () =>
  useQuery<Genre[], Error>({
    queryKey: ['filters', 'genreIds'],
    queryFn: () => new FilmFilters().getGenreIds(),
  })

export const useCountryIdsQuery = () =>
  useQuery<number[], Error>({
    queryKey: ['filters', 'countryIds'],
    queryFn: () => new FilmFilters().getCountryIds(),
  })

export const useFilmsWithFiltersQuery = (filters: Filtered) =>
  useQuery<FilmPreview[], Error>({
    queryKey: ['films', 'filtered', filters],
    queryFn: () => new FilmFilters().getFilmsWithFilters(filters),
    keepPreviousData: true,
  } as UseQueryOptions<FilmPreview[], Error>)