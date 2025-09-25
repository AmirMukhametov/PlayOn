import RegistrationForm from 'features/auth/registration/ui/RegistrationForm/RegistrationForm'
import style from './SignUpPage.module.css'

export const SignUpPage = ()=>{
    return (
         <div className={style.container}>
            <RegistrationForm />
        </div>
    )
}