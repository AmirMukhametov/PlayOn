import { useState } from 'react';

interface RegistrationData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const useRegistration = () => {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = async (data: RegistrationData) => {
    setIsPending(true);
    setIsError(false);
    setIsSuccess(false);
    setError(null);

    try {
      const response = await fetch('/api/auth/signup', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      await response.json(); 
      setIsSuccess(true);
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsPending(false);
    }
  };

  return { mutate, isPending, isError, isSuccess, error };
};