const BACKEND_BASE_URL = 'http://localhost:3001/api'; 

export abstract class BackendApi {
  protected baseUrl: string

  constructor() {
    this.baseUrl = BACKEND_BASE_URL;
  }

  protected async fetchBackend(url: string, options: RequestInit = {}) {
    console.log('Fetching:', `${this.baseUrl}${url}`, options);
    const response = await fetch(`${this.baseUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('Response status:', response.status);
    return response.json();
  }
}