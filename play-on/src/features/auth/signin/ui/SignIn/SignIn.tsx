import { Input } from 'shared/ui/Input'
import { Button } from 'shared/ui/Button'
import style from './SignIn.module.css'

function SignIn() {
    return (
        <form className={style.form}>
            <div className={style.container}>
                <h1 className={style.title}>Registration</h1>
                
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
                    Next
                </Button>
                
            </div>        
        </form>
    )
}

export default SignIn