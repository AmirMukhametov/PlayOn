import { BackendApi } from 'shared/api/backendApi';
import { RegistrationData, RegistrationResponse } from '../registration/model/registration';

export class AuthApi extends BackendApi {
  async register(data: RegistrationData): Promise<RegistrationResponse> {
    return this.fetchBackend('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async login(data: { email: string; password: string }): Promise<RegistrationResponse> {
    return this.fetchBackend('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const authApi = new AuthApi();