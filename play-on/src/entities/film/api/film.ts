import { BaseApi } from "shared/api/baseApi";
import { Movie, MovieFullData, VideoData, StaffPerson } from "../types"

export class Film extends BaseApi {
    id: number

    constructor(id: number) {
        super()
        this.id = id
    }

    async getMovieData(): Promise<MovieFullData> {
        try { 
            return await this.fetchWithAuth(`/v2.2/films/${this.id}`)
        } catch (error) {
            return this.handleApiError(error)
        }
    }

    async getMovieInfo(): Promise<Movie> {
        try {
            const movieData = await this.getMovieData();

            return {
                kinopoiskId: movieData.kinopoiskId,
                nameRu: movieData.nameRu,
                nameEn: movieData.nameEn,
                ratingKinopoisk: movieData.ratingKinopoisk,
                year: movieData.year,
                genres: movieData.genres,
                filmLength: movieData.filmLength,
                ratingAgeLimits: movieData.ratingAgeLimits?.replace("age", "") + "+",
                description: movieData.description,
                posterUrl: movieData.posterUrl,
            };
        } catch (error) {
            return this.handleApiError(error)
        }
    }

    async getTrailer(): Promise<String[]> {
        try {
            const data: VideoData = await this.fetchWithAuth(`/v2.2/films/${this.id}/videos`)
            const info = data.items[0]
            return [info.url, info.name]
        } catch (error) {
            return this.handleApiError(error)
        }
    }

    async getStaff(): Promise<StaffPerson[]> {
        try {
            return await this.fetchWithAuth(`/v1/staff?filmId=${this.id}`)
        } catch (error) {
            return this.handleApiError(error)
        }
    }

    async getDirectors(): Promise<{ nameEn: string; nameRu: string }[]> {
        try {
            const staffData = await this.getStaff();
            const directors: { nameEn: string; nameRu: string }[] = [];
            
            for (const person of staffData) {
                if (person.professionKey === 'DIRECTOR') {
                    directors.push({ nameEn: person.nameEn, nameRu: person.nameRu });
                    if (directors.length >= 3) break;
                }
            }
            
            return directors;
        } catch (error) {
            return this.handleApiError(error)
        }
    }

    async getActors(): Promise<{ nameEn: string; nameRu: string }[]> {
        try {
            const staffData = await this.getStaff();
            const actors: { nameEn: string; nameRu: string }[] = [];
            
            for (const person of staffData) {
                if (person.professionKey === 'ACTOR') {
                    actors.push({ nameEn: person.nameEn, nameRu: person.nameRu });
                    if (actors.length >= 6) break;
                }
            }
            
            return actors;
        } catch (error) {
            return this.handleApiError(error)
        }
    }

    private handleApiError(error: unknown): never {
        console.error('API Error:', error)
        throw new Error('Failed to fetch movie data')
    }
}