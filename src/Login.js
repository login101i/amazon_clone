import React, { useState } from 'react'
import './login.css'

import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    console.log(email, password)

    const signIn = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(error=>alert(error. message))
    }


    
    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // zarejestrowaliśmy z sukcesem
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (

        <div className="login">
            <div className="login__container">
                <Link to="/">
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Allegro.pl_sklep.svg/1280px-Allegro.pl_sklep.svg.png" alt="" />

                </Link>

                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}

                    />

                    <button
                        className="login__singInButton"
                        onClick={signIn}
                        type='submit'
                    >Sign In</button>
                </form>

                <p>Poprzez zalogowanie zgadzasz się na wszystkie warunki użytkowania. Proszę przejdź do polityki prywatności jeśli masz jakieś wątpliowści</p>

                <button
                    className="loginRegisterButton"
                    onClick={register}
                >Utwórz konto na Amazonie </button>
            </div>

        </div>
    )
}
