import { API_CONFIG } from './config'

export abstract class BaseApi {
  protected baseUrl: string
  protected apiKey: string

  constructor() {
    this.baseUrl = API_CONFIG.KINOPOISK.BASE_URL
    this.apiKey = API_CONFIG.KINOPOISK.API_KEY
  }

  protected async fetchWithAuth(url: string, options: RequestInit = {}) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': this.apiKey,
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  }
}