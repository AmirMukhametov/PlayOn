import { useState } from 'react';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { useRegistration } from '../../lib/useRegistration';
import style from './RegistrationForm.module.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const registrationMutation = useRegistration();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registrationMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.container}>
        <h1 className={style.title}>Sign up</h1> {/* Изменил на Sign up для регистрации */}
        
        <Input 
          type="email" 
          name="email" 
          placeholder="Email"  
          className={style.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <Input 
          type="password"
          name="password"
          placeholder="Password"
          className={style.input}
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <Button 
          type="submit" 
          className={style.button}
          disabled={registrationMutation.isPending}
        >
          {registrationMutation.isPending ? 'Loading...' : 'Sign up'}
        </Button>
        
        <div className={style.options}>
          <label className={style.remember}>
            <input 
              type="checkbox" 
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </label>
          
          <a href="#" className={style.help}>
            Need Help?
          </a>
        </div>

        {registrationMutation.isError && (
          <div className={style.error}>
            Registration failed. Please try again.
          </div>
        )}

        {registrationMutation.isSuccess && (
          <div className={style.success}>
            Registration successful! Redirecting...
          </div>
        )}
      </div>        
    </form>
  );
}

export default RegistrationForm;