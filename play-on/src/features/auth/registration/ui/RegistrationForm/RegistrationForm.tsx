import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import style from './RegistrationForm.module.css'

function RegistrationForm() {
    return (
        <form className={style.form}>
            <div className={style.container}>
                <h1 className={style.title}>Sign in</h1>
                
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email"  
                    className={style.input}
                />
                
                <Input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={style.input}
                />
                
                <Button type="submit" className={style.button}>
                    Sign in
                </Button>
                
                <div className={style.options}>
                    <label className={style.remember}>
                        <input type="checkbox" />
                        Remember Me
                    </label>
                    
                    <a href="#" className={style.help}>
                        Need Help?
                    </a>
                </div>
            </div>        
        </form>
    )
}

export default RegistrationForm