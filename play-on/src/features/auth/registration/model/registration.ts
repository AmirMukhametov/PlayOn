export interface RegistrationData {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface RegistrationResponse {
    userId: string;
    accessToken: string;
}