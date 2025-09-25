import SignIn from 'features/auth/signin/ui/SignIn/SignIn'
import style from './SignInPage.module.css'

export const SignInPage = ()=>{
    return (
         <div className={style.container}>
            <SignIn />
        </div>
    )
}